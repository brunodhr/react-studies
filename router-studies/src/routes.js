import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from 'pages/Home';
import Page1 from 'pages/Page1';
import Page2 from 'pages/Page2';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/page1" component={Page1} />
      <Route path="/page2" component={Page2} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
