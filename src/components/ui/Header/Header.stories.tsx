import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from '.';

storiesOf('Header', module)
  .add('Basic', () => <Header caption='Header text' />)
  .add('Disabled', () => (
  <>
    <Header caption='Header text - default' />
    <Header caption='Header text - H1' level={1}/>
    <Header caption='Header text - H2' level={2}/>
    <Header caption='Header text - H3' level={3}/>
    <Header caption='Header text - H4' level={4}/>
    <Header caption='Header text - H5' level={5}/>
    <Header caption='Header text - H6' level={6}/>
    <Header caption='Header text - H7' level={7}/>
    <Header caption='Header text - H8' level={8}/>
   </>
   )
);
