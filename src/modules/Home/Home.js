import React from 'react';

import './Home.css';

const Home = props =>

    <section className='HomeContainer'>
        
        <div className='row'>
            <h1 className='sectionTitle'>{props.homeTitle}</h1>
        </div>

        <div className='row'>
            <h2 className='sectionTextLight'>{props.homeText}</h2>
        </div>
    </section>

export default Home;