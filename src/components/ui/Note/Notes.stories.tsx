import React from 'react';
import { storiesOf } from '@storybook/react';
import Note from '.';

storiesOf('Note', module)
  .add('Basic', () => <Note caption='Lorem ipsum' />)
  .add('Type', () => (
  <>
    <Note caption='Lorem ipsum' />
    <Note caption='Lorem ipsum' type='info' />
    <Note caption='Lorem ipsum' type='success' />
    <Note caption='Lorem ipsum' type='error' />
    <Note caption='Lorem ipsum' type='warning' />
  </>
  )
  )
;
