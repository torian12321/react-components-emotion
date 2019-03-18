import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import Message from '.';

storiesOf('Message', module)
  .addDecorator(withKnobs)
  .add('Basic', () => {
    const caption = text('Caption', 'Lore ipsume');
    const disabled = boolean('Disabled', false)

    return <Message caption={caption} disabled={disabled} />
  })
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
