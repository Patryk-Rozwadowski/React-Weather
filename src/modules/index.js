import React from "react";

import CityInputContainer from './Containers/cityInput.container'
import DevTools from '../redux/DevTools/DevTools';
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
                    <DevTools />
                </main>
            </div>
        )
    }
}
