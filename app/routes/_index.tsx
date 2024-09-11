import { json, LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import Header from '~/components/Header';
import { getPageContent } from '~/models/page.server';
import { useLoaderData } from '@remix-run/react';
import { Config, Render } from '@measured/puck';
import puckConfig from '~/config/puck.config';
import Document from '~/components/Document';

export const loader = async ({ params }: LoaderFunctionArgs) => {
  // Get path, and default to slash for root path.
  const puckPath = params.puckPath || "/";
  // Get puckData for this path, this could be a database call.
  const puckData = await getPageContent(puckPath);
  if (!puckData) {
    throw new Response(null, {
      status: 404,
      statusText: "Not Found",
    });
  }
  // Return the data.
  return json({ puckData });
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  const title = data?.puckData?.root?.props?.title || "Page";

  return [{ title }];
};

export default function Index() {
  const { puckData } = useLoaderData<typeof loader>();

  return (
    <Document>
      <Render config={puckConfig as Config} data={puckData} />;
    </Document>
  );
}
