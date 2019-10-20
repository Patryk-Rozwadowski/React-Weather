import React, { Component } from 'react';
import { connect } from 'react-redux';

import CityInput from '../CityInput/CityInput';
import { fetchData } from '../../redux/actions/actions';

class CityInputContainer extends Component {

    render() {
        return (
            <div>
                <CityInput
                    fetchInfo={this.props.onSearchCity}
                />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchCity: url => dispatch(fetchData(url))
    }
}

export default connect(null, mapDispatchToProps)(CityInputContainer);