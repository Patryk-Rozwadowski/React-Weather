import React from 'react';
import { shallow } from 'enzyme';
import { spy } from 'sinon';

import Home from './Home.js';

import CityInputContainer from '../Containers/cityInput.container'

describe('Home component', () => {

    it('Should render Home page', () => {

        const wrapper = shallow(<Home />);
        expect(wrapper.containsMatchingElement(<div>
            <div className='App'>
                <section className='HomeContainer'>

                    <div className='row'>
                        <h1 className='sectionTitle'>Weather in your</h1>
                    </div>
                    <div className='row'>
                        <h2 className='sectionTextLight'>City!</h2>
                    </div>
                    <form>
                        <CityInputContainer />
                    </form>
                </section>
            </div>
        </div>))
    });
});