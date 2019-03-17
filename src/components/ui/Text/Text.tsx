import * as React from "react";
import { IText } from "./Text.interfaces";

const Text = React.memo((props: IText) => {
  const { caption, className, linebreak = false, tag } = props;
  const Tag: any = tag || React.Fragment;

  return (
    <React.Fragment>
      {tag ? <Tag className={className}>{caption}</Tag> : caption}
      {linebreak && <br />}
    </React.Fragment>
  );
});

export default Text;
