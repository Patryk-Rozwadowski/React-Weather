import React from 'react';
import './Temperature.css';

class Temperature extends React.Component {

    render() {
        return (
            <div className='row'>

                <div className='Temperature'>

                    <span><img className='TemperatureIcon' src={this.props.icon} alt='weather icon' /></span>

                    <span className='TemperatureTitle sectionTextLight'>{this.props.temp}°C</span>

                    <section className='TemperatureInfoContainer'>
                        <div className='row'>
                            <span className='sectionTitle TemperatureInfoTitle'> {this.props.desc} </span>
                        </div>

                        <div className='row'>
                            <span className='sectionText'>Min: {this.props.tempMin} °C</span>
                            <span className='sectionText'>Max: {this.props.tempMax} °C</span>
                        </div>

                        <div className='row'>
                            <span className='sectionText'>Wind: {this.props.windSpeed} m/s </span>
                            <span className='sectionText' style={{ transform: `rotate(${this.props.windDeg}deg)` }}> ➤ </span>
                        </div>

                        <div className='row'>
                            <span className='sectionText'>Pressure: {this.props.pressure} hPa</span>
                        </div>

                        <div className='row'>
                            <span className='sectionText'>&#x2601; {this.props.clouds}%</span>
                            <span className='sectionText'>&#x1f4a7; {this.props.humidity}%</span>'
                        </div>

                    </section>

                </div>

            </div>

        )
    }

}

export default Temperature;