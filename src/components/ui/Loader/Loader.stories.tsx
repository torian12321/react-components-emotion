import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Loader from '.';

storiesOf('Loader', module)
  .addDecorator(withKnobs)
  .add('Basic', () => {
    const size=select('Size', ['xs', 'sm', 'md', 'lg'], 'md');

    return <Loader size={size} />
})
  .add('Sizes', () => (
  <>
    <Loader />
    <Loader size='xs' />
    <Loader size='sm' />
    <Loader size='md' />
    <Loader size='lg' />
   </>
   )
);
