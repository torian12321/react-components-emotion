/** @jsx jsx */ jsx;
import React from "react";
import { jsx } from "@emotion/core";
import { ILoader } from "./Loader.interfaces";
import { styles, styleSize } from "./Loader.styles";

const Loader = React.memo((props: ILoader) => {
  const { className, size = 'sm' } = props;

  return <div css={[styles, styleSize[size]]} className={className} />;
});

export default Loader;
