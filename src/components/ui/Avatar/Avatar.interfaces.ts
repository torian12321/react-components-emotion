export interface IAvatar {
    className?: string;
    src ?:string;
    size?: 'xs'| 'sm'| 'md'| 'lg';
    state?: 'main' | 'sec'| 'success'| 'danger'| 'warning'  | 'disable';
}
  