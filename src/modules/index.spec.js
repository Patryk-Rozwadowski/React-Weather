import React from 'react';

import { shallow } from 'enzyme';

import CityInputContainer from './Containers/cityInput.container'
import TemperatureContainer from './Containers/Temperature.container';
import GeneralContainer from './Containers/General.container';


import IndexModules from './index';
import { exportAllDeclaration } from '@babel/types';


it.skip('renders without crashing', () => {
   const wrapper = shallow(<IndexModules />);

    expect(wrapper.containsMatchingElement(
        <CityInputContainer />
       
    )).to.equal(true);
});
