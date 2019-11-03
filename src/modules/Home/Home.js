import React from 'react';

import { withRouter } from 'react-router-dom'
import CityInputContainer from '../Containers/cityInput.container'
import './Home.css';


class Home extends React.Component {

    submitForm = (e) => {
        e.preventDefault()
        this.props.history.push('/weather');
    }

    render() {
        return (
            <div>
                <div className='App'>
                    <section className='HomeContainer'>

                        <div className='row'>
                            <h1 className='sectionTitle'>Weather in your</h1>
                        </div>
                        <div className='row'>
                            <h2 className='sectionTextLight'>City!</h2>
                        </div>
                        <form onSubmit={this.submitForm}>
                            <CityInputContainer onSubmit={this.submitForm} />
                        </form>
                    </section>
                </div>
            </div>
        )
    }
}
export default withRouter(Home);