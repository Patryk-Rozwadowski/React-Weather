import React from 'react';

import CityInputContainer from './modules/Containers/cityInput.container'
import DevTools from './redux/DevTools/DevTools';
import TemperatureContainer from './modules/Containers/Temperature.container';
import { connect } from 'tls';

class InfoSectionContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    firstLetterCapitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    oneDigitFormat = (num) => {
        return num ? num.toFixed(1) : null;
    }

    getTimeHandler = () => {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        let time;

        if (minutes >= 0 && minutes < 10) {
            time = `${hours}:0${minutes}`;
        }
        else {
            time = `${hours}:${minutes}`;
        }
        this.setState({ time })
    }

    render() {
        return (
            <div>

            
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch) => {

}

export default connect(mapStateToProps, mapDispatchToProps)(InfoSection)
