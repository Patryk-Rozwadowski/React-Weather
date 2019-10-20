import React from 'react';
import { connect } from 'react-redux';
import Temperature from '../Temperature/Temperature';
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation';

class TemperatureContainer extends React.Component {

    render() {
        return (
            <div>
                {this.props.isMounted === false && <LoadingAnimation />}
                {
                    this.props.isMounted === true 
                    && 
                    <Temperature 
                    tempMin={this.props.tempMin}
                    tempMax={this.props.tempMax} 
                    />
                }
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        tempMin: state.temperature.temp_min,
        tempMax: state.temperature.temp_max,
        isMounted: state.isMounted
    }
}

export default connect(mapStateToProps, null)(TemperatureContainer);