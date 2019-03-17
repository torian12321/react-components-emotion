/** @jsx jsx */ jsx;
import React from "react";
import { jsx } from "@emotion/core";
import { IDivider } from "./Divider.interfaces";
import { styles } from "./Divider.styles";

const Divider = React.memo((props: IDivider) => {
  const { className } = props;

  return <hr css={styles} className={className} />;
});

export default Divider;
