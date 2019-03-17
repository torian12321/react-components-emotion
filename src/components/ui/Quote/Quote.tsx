/** @jsx jsx */ jsx;
import React from "react";
import { jsx } from "@emotion/core";
import { IQuote } from "./Quote.interfaces";
import { styles } from "./Quote.styles";

const Quote = React.memo((props: IQuote) => {
  const { className, caption, author } = props;

  return (
    <blockquote css={[styles]} className={className} >
      {caption}
      {author}
    </blockquote>
  );
});

export default Quote;
