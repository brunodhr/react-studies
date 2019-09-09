import React from 'react'
import { storiesOf } from '@storybook/react'

import Home from './index'

storiesOf('Home', module).add('Teste de página', () => (
  <Home>
    <h1>Home</h1>
  </Home>
))
