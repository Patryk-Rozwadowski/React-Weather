import React from 'react';

import { shallow } from 'enzyme'; 

it.skip('renders without crashing', () => {

  shallow(
    <React.Fragment>
      <AppRoutes />
    </React.Fragment>);
});
