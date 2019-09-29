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
                    <button onClick={() => this.props.searchCity(this.state.city)}> SEND</button>
            
            </div>)
    }
}

export default CityInput;