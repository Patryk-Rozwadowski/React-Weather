import React from 'react';
import { mount } from 'enzyme';
import { spy } from 'sinon';

import CityInput from './CityInput.js';

describe('CityInput component', () => {
    it('Should submit CityInputContainer onSubmit', () => {
        const callback = spy();
        const form = mount(<CityInput className='submit-button CityInput' onClick={callback}> SEND </CityInput>);

       form.simulate('submit')
    });

    it('Should react on change actions', () => {

        const wrapper = mount(<CityInput />);
        wrapper.find('input').simulate('change', {target: {value: 'New value'}})
    })

});