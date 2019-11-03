import React from 'react';
import '../style.css';
import './ErrorInfo.css';

const ErrorInfo = props =>

    <React.Fragment>
        <div className='ErrorInfoContainer'>
            <span className='sectionTitle errorTitle'>Status: {props.errorInfo} - {props.errorStatus}</span>
        </div>
    </React.Fragment>



export default ErrorInfo;