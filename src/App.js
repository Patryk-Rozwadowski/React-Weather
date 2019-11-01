import React from "react";
import { Router, Route, browserHistory } from 'react-router'

import './App.css';
import './reset.css';
import './modules/style.css'

import {AppRoutes} from './routes';


import CityInputContainer from './modules/Containers/cityInput.container'
import DevTools from './redux/DevTools/DevTools';
import TemperatureContainer from './modules/Containers/Temperature.container';
import GeneralContainer from './modules/Containers/General.container';
import Home from './modules/Home/Home';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <AppRoutes />
      </div>
    )
  }
}
