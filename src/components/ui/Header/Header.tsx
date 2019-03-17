/** @jsx jsx */ jsx;
import React from "react";
import { jsx } from "@emotion/core";
import { IHeader } from "./Header.interfaces";
import { styles } from "./Header.styles";

// const tags =['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8']

// const Header = React.memo((props: IHeader) => {
//   const { caption, className, level = 1 } = props;
//   const Tag = tags[level] || 'h1';

//   return (
//     <Tag className={className}>
//       { caption }
//    </Tag>
//   );
// });

// const Header = React.memo((props: IHeader) => {
//   const { caption, className, level = 1 } = props;
//   const Tag = `h1`;

//   return (
//     <Tag className={className}>
//       { caption }
//    </Tag>
//   );
// });

const Header = React.memo((props: IHeader) => {
  const { caption, className, level } = props;

  return <h1 css={[styles, `${styles}--level-${level}`]} className={className}>{caption}</h1>;
});

export default Header;
