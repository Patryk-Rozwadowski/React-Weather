import React from 'react';
import './CityInput.css'

import { API } from '../../SENS_DATA';

class CityInput extends React.Component {
    state = {
        city: ''
    }

    onChangeHandler = event => {
        event.preventDefault();
        this.setState({ city: event.target.value });
    }

    render() {
        return (
            <div className='SearchBarContainer'>
                <input placeholder='&#x1f50d;'
                    type='text'
                    className='CityInput'
                    value={this.state.city}
                    onChange={this.onChangeHandler} />
                <button className='submit-button CityInput' onClick={() => this.props.fetchInfo(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=metric&appid=${API}`)}> SEND </button>
            </div>
        )
    }
}

export default CityInput;