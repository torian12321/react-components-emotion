import React from "react";
import { Message } from "../";
import { IMessageList } from "./MessageList.interfaces";
import "./MessageList.styles.css";

// const clx = "messageList";

const MessageList = React.memo((props: IMessageList) => {
  const { messages = [], className, classNameMessages } = props;

  return messages.length !== 0 ? (
    <div className={className}>
      {messages.map((m, i) => (
        <Message key={`item-${i}`} className={classNameMessages} {...m} />
      ))}
    </div>
  ) : null;
});

export default MessageList;
