import React from 'react';
import { connect } from 'react-redux';

import Temperature from '../Temperature/Temperature';
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation';
import ErrorInfoContainer from './ErrorInfo.container';

class TemperatureContainer extends React.Component {

    render() {
        return (
            <React.Fragment>
                {
                    this.props.isLoading === true && <LoadingAnimation />
                }

                {
                    this.props.error === true &&
                    <div className='ErrorCenter'>
                        <ErrorInfoContainer />
                    </div>
                }

                {
                    this.props.isMounted === true
                    && this.props.error === false &&
                    <Temperature
                        icon={`http://openweathermap.org/img/wn/${this.props.icon}@2x.png`}
                        desc={this.props.desc}
                        temp={this.props.temp}
                        tempMin={this.props.tempMin}
                        tempMax={this.props.tempMax}
                        windSpeed={this.props.windSpeed}
                        windDeg={this.props.windDeg}
                        pressure={this.props.pressure}
                        clouds={this.props.clouds}
                        humidity={this.props.humidity}
                    />
                }
            </React.Fragment>
        )
    }

}

const mapStateToProps = state => {
    return {
        icon: state.weather.icon,
        desc: state.weather.description,
        temp: state.temperature.temp,
        tempMin: state.temperature.temp_min,
        tempMax: state.temperature.temp_max,
        pressure: state.pressure.pressure,
        windSpeed: state.wind.speed,
        windDeg: state.wind.deg,
        clouds: state.clouds.all,
        humidity: state.humidity.humidity,
        isMounted: state.isMounted,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapStateToProps, null)(TemperatureContainer);