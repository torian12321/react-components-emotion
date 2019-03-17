export type INoteTypes = 'info' | 'success' | 'warning' | 'error';

export interface INote {
  caption: string | string[];
  className?: string;
  type?: INoteTypes;
  showLabel?: boolean;
  /** Will trigger on press 'x' icon */
  onClose?: any;
}
