import React from 'react';
import { storiesOf } from '@storybook/react';
import Quote from '.';

storiesOf('Quote', module)
  .add('Basic', () => <Quote caption='Lorem ipsum' />)
  .add('author', () => (
  <>
    <Quote caption='Lorem ipsum' />
    <Quote caption='Lorem ipsum' author='Bla bla' />
   </>
   )
);
