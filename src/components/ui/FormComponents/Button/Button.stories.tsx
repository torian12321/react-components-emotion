import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '.';

storiesOf('Button', module)
  .add('Basic', () => <Button caption='Button text' />)
  .add('Disabled', () => (
  <>
    <Button caption='Default' />
    <Button caption='disabled' disabled />
    <Button caption='disabled' disabled={true} />
   </>
   ))
   .add('Action - onClose', () => (
    <Button caption='Click me' onClick={action('Button clicked')} />
));
