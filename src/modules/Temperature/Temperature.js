import React from 'react';
import './Temperature.css';

const Temperature = props =>
    <div className='row'>
        <div className='Temperature'>
            <span><img className='TemperatureIcon' src={props.icon} alt='weather icon' /></span>
            <span className='TemperatureTitle sectionTextLight'>{props.temp}°C</span>
            <TemperatureInfo
                tempMin={props.tempMin}
                tempMax={props.tempMax}
                desc={props.desc}
                windSpeed={props.windSpeed}
                windDeg={props.windDeg}
            />
        </div>

    </div>

const TemperatureInfo = props =>
    <div className='TemperatureInfoContainer'>

        <div className='row'>
            <span className='sectionTitle TemperatureInfoTitle'> {props.desc}</span>
        </div>

        <div className='row'>
            <span className='sectionText'>Min: {props.tempMin} °C</span>
            <span className='sectionText'>Max: {props.tempMax} °C</span>
        </div>

        <div className='row'>
            <span className='sectionText'>Wind: {props.windSpeed} m/s </span>
            <span className='sectionText' style={props.windDeg}> ➤ </span>
        </div>

    </div>

export default Temperature;