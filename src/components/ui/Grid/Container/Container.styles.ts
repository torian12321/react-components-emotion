import { css } from "@emotion/core";
import { mixins } from '../../../styles';

const breackpoint = {
  xs: '767px',
  sm: '768px',  // xs +1
  md: '992px',
  lg: '1200px'
}


const mediaQuery = {
  xs: (content: string) => `@media (min-width: ${breackpoint.xs}) { ${content} }`,
  sm: (content: string) => `@media (min-width: ${breackpoint.sm}) { ${content} }`,
  md: (content: string) => `@media (min-width: ${breackpoint.md}) { ${content} }`,
  lg: (content: string) => `@media (min-width: ${breackpoint.lg}) { ${content} }`
};

export const styles = css(`
  width     : 100%;
  display   : block;
  margin    : 0 auto;
  box-sizing: border-box;
  padding   : 0 floor(($grid-gutter-width / 2));
  ${mixins.clearfix}

  ${mediaQuery.xs(`color: red`)}
  ${mediaQuery.sm(`color: blue`)}
  ${mediaQuery.md(`color: yellow`)}
  ${mediaQuery.lg(`color: purple`)}
`);


// .container {
//   @include bp-sm { max-width: ($bp_sm - 40); }
//   @include bp-md { max-width: ($bp_md - 40); }
//   @include bp-lg { max-width: ($bp_lg - 40); }
// }