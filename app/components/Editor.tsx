import { ComponentProps } from 'react';
import { type Config, Puck } from '@measured/puck';
import puckConfig from '~/config/puck.config';

import "@measured/puck/puck.css";
import Document from '~/components/Document';
import EditorHeader from '~/components/EditorHeader';

type Props = Pick<ComponentProps<typeof Puck>, 'data' | 'onPublish'>;

export default function Editor({ data, onPublish }: Props) {
  return (
    <Puck
      config={puckConfig as Config}
      data={data}
      onPublish={onPublish}
    >
      <Document
        header={
          <EditorHeader onPublish={onPublish}/>
        }
        editMode
      >
        <div className="grid grid-cols-4 gap-4 h-full">
          <div className="col-span-1 h-full">
            <Puck.Components/>
          </div>

          <div className="col-span-2 h-full">
            <Puck.Preview/>
          </div>

          <div className="bg-white col-span-1 h-full">
            <Puck.Fields />
          </div>
        </div>
      </Document>
    </Puck>
  )
}
