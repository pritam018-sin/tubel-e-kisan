// src/routes.js
import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';

const Routes = () => (
  <>
    <Route path="/" exact component={HomePage} />
    <Route path="/dashboard" component={DashboardPage} />
  </>
);

export default Routes;
