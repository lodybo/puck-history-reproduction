import { Editor } from '@tinymce/tinymce-react';
import { ComponentConfig } from '@measured/puck';
import { useSelected } from '~/config/plugins/useSelected';
import { useEffect, useState } from 'react';

export type RichTextEditorPluginProps = {
  state: any;
}

export const RichTextEditorPlugin = {
  fields: {
    state: {
      type: 'custom',
      render: () => <></>,
    }
  },
  render: ({ puck, ...props }) =>
    <RichTextEditor
      isEditing={ puck.isEditing }
      { ...props }
    />,
} satisfies ComponentConfig<RichTextEditorPluginProps>;

type Props = {
  id: string,
  isEditing: boolean,
};

function RichTextEditor({ id, isEditing }: Props) {
  const { onChange } = useSelected(id);
  // const [ isEnabled, setIsEnabled ] = useState(false);

  // useEffect(() => {
  //   setIsEnabled(isEditing && isSelected);
  // }, [ isEditing, isSelected ]);

  return (
    <div className="pointer-events-auto">
      <Editor
        id={ id }
        tinymceScriptSrc="/tinymce/tinymce.min.js"
        licenseKey="gpl"
        onEditorChange={ (content) => {
          console.log('RichTextEditor onEditorChange', content);
          if (onChange) {
            onChange({ content });
          } else {
            console.warn('RichTextEditor missing onChange');
          }
        } }
        inline={ !isEditing }
        disabled={ false }
        init={ {
          height: 500,
          width: '100%',
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Arial,sans-serif; font-size:16px }'
        } }
      />
    </div>
  );
}
