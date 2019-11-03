import React from "react";

import CityInputContainer from './Containers/cityInput.container'
import TemperatureContainer from './Containers/Temperature.container';
import GeneralContainer from './Containers/General.container';

export default class IndexModules extends React.Component {

    render() {
        return (
            <div className='App'>
                <main className='container'>
                    <CityInputContainer />
                    <GeneralContainer />
                    <TemperatureContainer />
                </main>
            </div>
        )
    }
}
