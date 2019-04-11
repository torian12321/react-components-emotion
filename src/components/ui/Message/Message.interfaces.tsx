export type IMessageTypes = "info" | "success" | "warning" | "error";

export interface IMessage {
  caption: string | string[];
  className?: string;
  type?: IMessageTypes;
  showLabel?: boolean;
  /** Will trigger on press 'x' icon */
  onClose?: any;
}
