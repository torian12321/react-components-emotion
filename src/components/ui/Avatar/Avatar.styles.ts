import { css } from "@emotion/core";
import ImgDef     from './user.png';

export const styles = css`
  position  : relative;
  height    : 100px;
  width     : 100px;
  background-color: purple;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${ImgDef});
  margin    : 1em auto;
  border    : none;
  overflow  : visible;
  text-align: center;
  border-radius: 50%;
  opacity   : .8;
}`;
