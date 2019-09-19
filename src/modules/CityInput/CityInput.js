import React from 'react';
import './CityInput.css'

const CityInput = props =>

    <div className='SearchBarContainer'>
        <form onSubmit={props.submit} >
            <input placeholder='&#8981;'
                className='CityInput'
                value={props.cityValue}
                onChange={props.onChangeHandler} >
            </input>
        </form>
    </div>

export default CityInput;