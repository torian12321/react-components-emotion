import React from "react";
import { ILabel } from "./Label.interfaces";

const LabelPrimitive = React.memo((props: ILabel) => {
  const { children, caption, className, name, title } = props;

  return (
    <label aria-label={title || name} className={className} htmlFor={name}>
      {children || caption || null}
    </label>
  );
});

export default LabelPrimitive;
