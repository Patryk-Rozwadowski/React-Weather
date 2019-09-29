import React, {Component} from 'react';
import { connect } from 'react-redux';

import CityInput from '../CityInput/CityInput';
import { FETCH_DATA } from '../../redux/actions/actions';

class CityInputContainer extends Component {
    render() {
        return (
            <div>
                <CityInput 
                searchCity={this.props.onSearchCity}
                />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchCity: city => dispatch({type:FETCH_DATA, payload: { city }})
    }
}

export default connect(null, mapDispatchToProps)(CityInputContainer);