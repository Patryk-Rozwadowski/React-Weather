import React from 'react';
import './General.css';
import '../style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'


const General = props =>

    <div className='GeneralTitle'>
        <span className='sectionTitle'> <FontAwesomeIcon icon={faMapMarkerAlt} /> {props.city}, {props.country}</span>
        <span className='sectionTextLight'>{props.time}</span>
    </div>
    
export default General;