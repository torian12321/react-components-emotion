import React from 'react';
import { storiesOf } from '@storybook/react';
import Loader from '.';

storiesOf('Loader', module)
  .add('Basic', () => <Loader />)
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
