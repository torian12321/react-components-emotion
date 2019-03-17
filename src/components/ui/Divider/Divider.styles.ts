import { css } from "@emotion/core";
import { colors } from '../../styles';

export const styles = css`
  position  : relative;
  height    : 1px;
  width     : 100%;
  margin    : 1em auto;
  border    : none;
  overflow  : visible;
  text-align: center;
  opacity   : .8;
  background: linear-gradient(to right, transparent, ${colors.theme.main}, transparent);

  &:before {
    content: '';
    position  : absolute;
    left      : 50%;
    font-size : 8px;
    height    : 1em;
    width     : 1em;
    margin    : -.5em;
    background: ${colors.theme.background};
    border    : ${colors.theme.main} 1px solid;
    box-sizing: border-box;
    transform: rotate(45deg);
  }
}`;
