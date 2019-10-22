import React from 'react';
import { connect } from 'react-redux';
import Temperature from '../Temperature/Temperature';
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation';

class TemperatureContainer extends React.Component {

    render() {
        return (
            <div>
                {this.props.isLoading === true && <LoadingAnimation /> }
                {
                    this.props.isMounted === true
                    &&
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
            </div>
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
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps, null)(TemperatureContainer);