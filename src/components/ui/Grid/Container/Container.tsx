/** @jsx jsx */ jsx;
import React from "react";
import { jsx } from "@emotion/core";
import { IContainer } from "./Container.interfaces";
import { styles } from "./Container.styles";

class Container extends React.Component<IContainer> {
  render() {
    const { children, className, fluid = false } = this.props;

    console.log('fff', fluid);
    return <div css={[styles]} className={className}>{children}</div>;
  }
};

export default Container;
