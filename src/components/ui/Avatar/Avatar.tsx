/** @jsx jsx */ jsx;
import React from "react";
import { jsx } from "@emotion/core";
import { IAvatar } from "./Avatar.interfaces";
import { styles } from "./Avatar.styles";
import ImgDef     from './user.png';

const Avatar = React.memo((props: IAvatar) => {
  const { src=ImgDef, className } = props;
 console.log(src);

  return (<div 
        css={[styles]}
        // style    ={{backgroundImage: `url(${src})`}}
        className={className}
      />)
});

export default Avatar;
