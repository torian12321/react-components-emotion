import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Message from '.';

storiesOf('Message', module)
  .add('Basic', () => <Message caption='Lorem ipsum' />)
  .add('Type', () => (
    <>
      <Message caption='Lorem ipsum' />
      <Message caption='Lorem ipsum' type='info' />
      <Message caption='Lorem ipsum' type='success' />
      <Message caption='Lorem ipsum' type='warning' />
      <Message caption='Lorem ipsum' type='error' />
    </>
  ))
  .add('Show lavel', () => (
    <>
      <Message caption='Lorem ipsum' />
      <Message caption='Lorem ipsum' showLabel={false} />
    </>
  ))
  .add('Action - onClose', () => (
      <Message caption='Lorem ipsum' onClose={action('closed')} />
  ));
