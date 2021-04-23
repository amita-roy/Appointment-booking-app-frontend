import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import ServicesPage from 'pages/ServicesPage';
import SignUpPage from 'pages/SignUpPage';
import SignInPage from 'pages/SignInPage';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/services" exact component={ServicesPage} />
    <Route path="/signup" exact component={SignUpPage} />
    <Route path="/signin" exact component={SignInPage} />
  </Switch>
);

export default Routes;
