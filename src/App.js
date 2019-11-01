import React from "react";
import { Router, Route, browserHistory } from 'react-router'

import './App.css';
import './reset.css';
import './modules/style.css'


import CityInputContainer from './modules/Containers/cityInput.container'
import DevTools from './redux/DevTools/DevTools';
import TemperatureContainer from './modules/Containers/Temperature.container';
import GeneralContainer from './modules/Containers/General.container';
import Home from './modules/Home/Home';

export default class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <div className='App'>

          {/* <main className='container'> */}
          <Route exact path="/" component={Home} />
          <Route path='/weather-info' component={CityInputContainer} />
          {/* <CityInputContainer />
          <GeneralContainer />
          <TemperatureContainer />
          <DevTools /> */}

          {/* </main> */}
        </div>
      </Router>
    )
  }
}
