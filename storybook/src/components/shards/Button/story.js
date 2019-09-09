import React from 'react'
import { storiesOf } from '@storybook/react'

import ShardsButton from './index'

storiesOf('ShardsButton', module)
  .add('Second', () => <ShardsButton theme='secondary'>Secondary</ShardsButton>)
  .add('Success', () => <ShardsButton theme='success'>Success</ShardsButton>)
  .add('Info', () => <ShardsButton theme='info'>Info</ShardsButton>)
  .add('Warning', () => <ShardsButton theme='warning'>Warning</ShardsButton>)
  .add('Danger', () => <ShardsButton theme='danger'>Danger</ShardsButton>)
  .add('Light', () => <ShardsButton theme='light'>Light</ShardsButton>)
  .add('Dark', () => <ShardsButton theme='dark'>Dark</ShardsButton>)
