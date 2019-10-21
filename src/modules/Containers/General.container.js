import React from 'react';
import { connect } from 'react-redux';
import General from '../General/General';
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation';

class GeneralContainer extends React.Component {

    render() {
        return (
            <div>
                {this.props.isMounted === false && <LoadingAnimation />}
                {
                    this.props.isMounted === true
                    &&
                    <General
                        city={this.props.city}
                        country={this.props.country} />
                }
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        city: state.city.name,
        country: state.country.country,
        isMounted: state.isMounted
    }
}

export default connect(mapStateToProps, null)(GeneralContainer);