import React from 'react';
import './CityInput.css'

const CityInput = props =>

    <div className='SearchBarContainer'>
        <form onSubmit={props.submit} >
            <input placeholder='&#x1f50d;'
                className='CityInput'
                value={props.cityValue}
                onChange={props.onChangeHandler} >
            </input>
        </form>
    </div>

export default CityInput;