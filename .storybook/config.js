import { configure /*, addParameters*/ } from "@storybook/react";

// automatically import all files ending in *.stories.tsx
const req = require.context("../src", true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// addParameters({
//   backgrounds: [
//     { name: 'twitter', value: '#00aced', default: true },
//     { name: 'facebook', value: '#3b5998' },
//   ],
// });

configure(loadStories, module);
