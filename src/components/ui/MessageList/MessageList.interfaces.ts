import { IMessage } from "../Message/Message.interfaces";

export interface IMessageList {
  messages?: IMessage[];
  className?: string;
  classNameMessages?: string;
}
