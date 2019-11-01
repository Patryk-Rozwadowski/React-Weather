import React from "react";
import { Router, Route, browserHistory } from 'react-router'

import IndexModules from './modules/index';

export const AppRoutes = () =>

    <Router history={browserHistory}>
        <Route exact path="/" component={IndexModules} />
    </Router>