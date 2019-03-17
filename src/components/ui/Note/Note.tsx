/** @jsx jsx */ jsx;
import React from "react";
import { jsx } from "@emotion/core";
import { INote } from "./Note.interfaces";
import { styles,  stylesTypes} from "./Note.styles";
const clx = "message";

const Note = React.memo((props: INote) => {
  const { caption, className, type = "info"} = props;

  return caption ? (
    <div css={[styles, stylesTypes[type]]} className={className}>
      <strong className={`${clx}__title`}>{type}</strong>
      <span className={`${clx}__content`}>{caption}</span>
    </div>
  ) : null;
});

export default Note;
