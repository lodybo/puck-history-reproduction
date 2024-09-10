import { ComponentProps } from 'react';
import { type Config, Puck } from '@measured/puck';
import puckConfig from '~/puck.config';

import "@measured/puck/puck.css";

type Props = Pick<ComponentProps<typeof Puck>, 'data' | 'onPublish'>;

export default function Editor({ data, onPublish }: Props) {
  return (
    <Puck
      config={puckConfig as Config}
      data={data}
      onPublish={onPublish}
    />
  )
}
