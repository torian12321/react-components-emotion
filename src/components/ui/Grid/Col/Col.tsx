/** @jsx jsx */ jsx;
import React from "react";
import { jsx } from "@emotion/core";
import { ICol } from "./Col.interfaces";
import { styles } from "./Col.styles";

class Col extends React.Component<ICol> {
  render() {
    const { caption, className, level } = this.props;

    return <h1 css={[styles, `${styles}--level-${level}`]} className={className}>{caption}</h1>;
  }
};

export default Col;
