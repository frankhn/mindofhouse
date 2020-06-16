/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */

import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import * as createHistory from 'history';
import AppLayout from '../HOC/layouts/HomeLayout';
import SearchLayout from '../HOC/searchLayout/SearchLayout';


export const history = createHistory.createBrowserHistory();
const AppRouter = () => (
    <Router history={history}>
        <Switch>
          <Route path="/browse" component={SearchLayout} />
          <Route path='/' exact component={AppLayout} />
        </Switch>
    </Router>
);

export default AppRouter;
