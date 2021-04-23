import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import ServicesPage from 'pages/ServicesPage';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/services" exact component={ServicesPage} />
  </Switch>
);

export default Routes;
