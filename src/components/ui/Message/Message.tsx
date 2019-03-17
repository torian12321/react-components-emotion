/** @jsx jsx */ jsx;
import React from "react";
import { jsx } from "@emotion/core";
// import { Icon } from 'framework/components/ui/Icon';
// import { Text } from 'framework/components/ui/Text';
import { IMessage } from "./Message.interfaces";
import { styles,  stylesTypes} from "./Message.styles";
const clx = "message";

const Message = React.memo((props: IMessage) => {
  const { caption, className, type = "info" /*, showLabel = true */} = props;

  // const labels = {
  //   info: "components.message.labels.info",
  //   success: "components.message.labels.success",
  //   warning: "components.message.labels.warning",
  //   error: "components.message.labels.error"
  // };

  return caption ? (
    <div css={[styles, stylesTypes[type]]} className={className}
      // className={classnames(
      //   clx,
      //   type && `${clx}--${type}`,
      //   onClose && `${clx}--closable`,
      //   !visible && 'mwg-hidden',
      //   className
      // )}
    >
      {/* {onClose && <Icon className={`${clx}__closeIcon`} name="close" onClick={onClose} />} */}
      {/* {showLabel && <strong className={`${clx}__title`}>{labels[type]}</strong>} */}
      <strong className={`${clx}__title`}>{type}</strong>
      {/* {showLabel && (
          <Text
            caption={labels[type]}
            tag="strong"
          />
        )} */}
      <span className={`${clx}__content`}>{caption}</span>
    </div>
  ) : null;
});

export default Message;
