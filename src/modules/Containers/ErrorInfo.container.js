import React, { Component } from 'react';
import { connect } from 'react-redux';

import ErrorInfo from '../ErrorInfo/ErrorInfo';

class ErrorInfoContainer extends Component {

    render() {
        return (
            <div>
                <ErrorInfo
                    errorInfo={this.props.errorInfo}
                    errorStatus={this.props.errorStatus} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        errorInfo: state.errorInfo,
        errorStatus: state.errorStatus
    }
}

export default connect(mapStateToProps, null)(ErrorInfoContainer);