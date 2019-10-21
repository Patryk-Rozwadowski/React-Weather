import React from 'react';
import './General.css';
import '../style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'


class General extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            time: ''
        }
    }

    componentDidMount = () => {
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
            <div className='GeneralTitle'>
                <span className='sectionTitle'> <FontAwesomeIcon icon={faMapMarkerAlt} /> {this.props.city}, {this.props.country}</span>
                <span className='sectionTextLight'>{this.state.time}</span>
            </div>

        )
    }

}

export default General;