import React from "react";
import { ComponentConfig } from '@measured/puck';
import styles from "app/config/blocks/Blank/Blank.module.css";
import { getClassNameFactory } from "~/lib/getClassName";

const getClassName = getClassNameFactory("Hero", styles);

export type HeroProps = {};

export const Hero: ComponentConfig<HeroProps> = {
  fields: {},
  defaultProps: {},
  render: () => {
    return <div className={getClassName()}></div>;
  },
};
