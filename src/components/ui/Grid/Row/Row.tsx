/** @jsx jsx */ jsx;
import React from "react";
import { jsx } from "@emotion/core";
import { IRow } from "./Row.interfaces";
import { styles } from "./Row.styles";

class Row extends React.Component<IRow> {
  render() {
    const { children, className } = this.props;

    return <div css={styles} className={className}>{children}</div>;
  }
};

export default Row;
