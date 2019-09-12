import React from 'react';
import '../style.css';
import './ErrorInfo.css';

const ErrorInfo = props => 
<div>
    <div className='ErrorInfoContainer containerBg'>
        <span className='sectionTitle'>Status: {props.errorInfo} - {props.errorStatus}</span>
    </div>
</div>



export default ErrorInfo;