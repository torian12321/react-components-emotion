import { css } from "@emotion/core";

export const aa = () => css`
  *zoom: 1;
  &:before, &:after {
    content: " ";
    display: table;
  }
  &:after {
    clear: both;
  }
`

export  default `
  &:before, &:after {
    content: " ";
    display: table;
    clear: both;
  }
`