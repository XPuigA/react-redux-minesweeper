import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../components/Main.jsx';
import NotFound from '../components/NotFound.jsx';

const routeConfig = (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route component={NotFound} />
  </Switch>
);

export default routeConfig;
