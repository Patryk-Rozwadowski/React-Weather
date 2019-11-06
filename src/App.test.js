import React from 'react';

import { shallow } from 'enzyme'; 

import AppRoutes from './App';


fit.skip('renders without crashing', () => {

  shallow(
    <React.Fragment>
      <AppRoutes />
    </React.Fragment>);
});
