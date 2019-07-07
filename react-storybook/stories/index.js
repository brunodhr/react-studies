import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from 'components/Button';
import Home from 'pages/Home';

storiesOf('Button', module)
  .add('with text', () => <Button>Hello Button</Button>)
  .add('with emoji', () => (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))
  .add('Óbviamente, com o xD', () => <Button>xD</Button>)
  .add('Será que dá com função', () => (
    <Button onClick={alert('aaa')}>Será</Button>
  ));

storiesOf('Home', module).add('Teste de página', () => (
  <Home>
    <Button>teste</Button>
  </Home>
));
