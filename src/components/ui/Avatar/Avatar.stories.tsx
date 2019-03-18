import React from 'react';
import { storiesOf } from '@storybook/react';
import Avatar from '.';

storiesOf('Avatar', module)
  .add('Basic', () => <Avatar />)
  .add('Sizes', () => (
  <>
    <Avatar />
    <Avatar size='xs' />
    <Avatar size='sm' />
    <Avatar size='lg' />
    <Avatar size='md' />
   </>
   )
);
