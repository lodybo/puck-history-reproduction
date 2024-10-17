import type { Config } from '@measured/puck';
import { ButtonGroup, ButtonGroupProps } from "./blocks/ButtonGroup";
import { Columns, ColumnsProps } from "./blocks/Columns";
import { Hero, HeroProps } from "./blocks/Hero";
import { Heading, HeadingProps } from "./blocks/Heading";
import { Flex, FlexProps } from "./blocks/Flex";
import { Logos, LogosProps } from "./blocks/Logos";
import { Stats, StatsProps } from "./blocks/Stats";
import { Text, TextProps } from "./blocks/Text";
import { VerticalSpace, VerticalSpaceProps } from "./blocks/VerticalSpace";
import { RichTextEditorPlugin, RichTextEditorPluginProps } from '~/config/plugins/RichText';

type Props = {
  ButtonGroup: ButtonGroupProps;
  Columns: ColumnsProps;
  Hero: HeroProps;
  Heading: HeadingProps;
  Flex: FlexProps;
  Logos: LogosProps;
  Stats: StatsProps;
  Text: TextProps;
  VerticalSpace: VerticalSpaceProps;
  RichTextEditor: RichTextEditorPluginProps;
};

export const config: Config<Props> = {
  categories: {
    layout: {
      components: ["Columns", "Flex", "VerticalSpace"],
    },
    typography: {
      components: ["Heading", "Text", "RichTextEditor"],
    },
    interactive: {
      title: "Actions",
      components: ["ButtonGroup"],
    },
  },
  components: {
    ButtonGroup,
    Columns,
    Hero,
    Heading,
    Flex,
    Logos,
    Stats,
    Text,
    VerticalSpace,
    RichTextEditor: RichTextEditorPlugin
  },
};

export default config;
