import React from 'react';

import './App.css';
import './reset.css';
import './modules/style.css'

import CityInputContainer from './modules/Containers/cityInput.container'
import DevTools from './redux/DevTools/DevTools';
import TemperatureContainer from './modules/Containers/Temperature.container';
import GeneralContainer from './modules/Containers/General.container';

class App extends React.Component {

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

export default App;
