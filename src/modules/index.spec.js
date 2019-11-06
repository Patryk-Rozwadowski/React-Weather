import React from 'react';

import { shallow } from 'enzyme';

import CityInputContainer from './Containers/cityInput.container'
import TemperatureContainer from './Containers/Temperature.container';
import GeneralContainer from './Containers/General.container';


import IndexModules from './index';

describe('xd', () => {
    it('renders without crashing', () => {
        shallow(<IndexModules />);
    });
})
