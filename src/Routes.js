import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import ServicesPage from 'pages/ServicesPage';
import SignUpPage from 'pages/SignUpPage';
import SignInPage from 'pages/SignInPage';
import CartPage from 'pages/CartPage';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/services" exact component={ServicesPage} />
    <Route path="/signup" exact component={SignUpPage} />
    <Route path="/signin" exact component={SignInPage} />
    <Route path="/cart" exact component={CartPage} />
  </Switch>
);

export default Routes;
