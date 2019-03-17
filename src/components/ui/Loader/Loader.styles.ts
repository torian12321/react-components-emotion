import { css } from "@emotion/core";
import { colors, animations } from '../../styles';

// Block
export const styles = css`
  display   : block;
  background: transparent;
  box-sizing: border-box;
  margin    : auto;
  width     : 1em;
  height    : 1em;
  border    : ${colors.status.disabled.default} .1em solid;
  border-top-color: ${colors.theme.main};
  border-radius: 50%;
  animation: ${animations.rotate} 1s ease infinite;
` ;

// Mofifiers
const loaderSize = 20; // value on px

export const styleSize = {
  xs:  css`font-size: ${loaderSize * 0.5}px;`,
  sm:  css`font-size: ${loaderSize * 1}px;`,
  md:  css`font-size: ${loaderSize * 1.5}px;`,
  lg:  css`font-size: ${loaderSize * 2.5}px;`
}