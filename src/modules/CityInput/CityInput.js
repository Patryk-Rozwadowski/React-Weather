import React from 'react';
import './CityInput.css'

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
                <button onClick={() => this.props.fetchInfo(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=metric&appid=4608dbdd344e79698ed563db79599f06`)}> SEND</button>
            
            </div>)
    }
}

export default CityInput;