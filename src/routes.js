import React from "react";
import { Route, BrowserRouter } from 'react-router-dom'

import IndexModules from './modules/index';
import Home from './modules/Home/Home';

export const AppRoutes = () =>

        <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Route exact path="/" component={Home} />
                <Route path="/weather" component={IndexModules} />
        </BrowserRouter>