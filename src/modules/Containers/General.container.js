import React from 'react';
import { connect } from 'react-redux';
import General from '../General/General';

import ErrorInfoContainer from './ErrorInfo.container';
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation';

class GeneralContainer extends React.Component {

    render() {
        return (
            <div>
                {this.props.isLoading === true && <LoadingAnimation />}
                {this.props.error === true && <ErrorInfoContainer />}
                {this.props.error === false && this.props.isMounted && 
                    <General
                        city={this.props.city}
                        country={this.props.country} />}
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        city: state.city.name,
        country: state.country.country,
        isMounted: state.isMounted,
        isLoading: state.isLoading,
        errorStatus: state.errorStatus,
        error: state.error
    }
}

export default connect(mapStateToProps, null)(GeneralContainer);