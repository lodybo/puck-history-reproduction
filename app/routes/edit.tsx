import { Puck, type Data, type Config } from '@measured/puck';
import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  MetaFunction, redirect, json,
} from '@remix-run/node';
import { useActionData, useLoaderData, useSubmit } from '@remix-run/react';
import invariant from 'tiny-invariant';

import { getPageContent, savePageContent } from '~/models/page.server';
import Editor from '~/components/Editor';

export const action = async ({ params, request }: ActionFunctionArgs) => {
  const puckPath = params.puckPath || '/';
  const formData = await request.formData();
  const puckData = formData.get('puckData');

  invariant(puckData, 'Missing data');
  invariant(typeof puckData === 'string', 'Invalid data');

  try {
    await savePageContent(puckPath, JSON.parse(puckData));
    return redirect(puckPath);
  } catch (error) {
    console.error('Error saving data', error);
    return json({ ok: false }, { status: 500 });
  }
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const puckPath = params.puckPath || '/';
  const initialData = await getPageContent(puckPath) || {
    content: [],
    root: {},
  };
  return json({ puckPath, initialData });
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  const title = data?.initialData?.root?.props?.title || 'Untitled page';

  return [ { title: `Editing: ${ title }` } ];
};

export default function Edit() {
  const { initialData } = useLoaderData<typeof loader>() as never;
  const data = useActionData<typeof action>();
  const submit = useSubmit();

  if (data) {
    console.log('Edit data', data);
  }

  return (
    <Editor
      data={ initialData }
      onPublish={ async (data: Data) => {
        // Use form data here because it's the usual remix way.
        const formData = new FormData();
        formData.append('puckData', JSON.stringify(data));
        submit(formData, { method: 'post' });
      } }
    />
  );
}
