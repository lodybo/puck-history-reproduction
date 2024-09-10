import type { Config } from '@measured/puck';
import { PuckRichText, PuckRichTextProps } from '@tohuhono/puck-rich-text';

type Props = {
  HeadingBlock: { title: string };
  RichTextBlock: PuckRichTextProps;
};

export const config: Config<Props> = {
  components: {
    HeadingBlock: {
      fields: {
        title: { type: 'text' },
      },
      defaultProps: {
        title: 'Heading',
      },
      render: ({ title }) => (
        <div style={ { padding: 64 } }>
          <h1>{ title }</h1>
        </div>
      ),
    },
    RichTextBlock: PuckRichText,
  },
};

export default config;
