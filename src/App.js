import React from "react";

import './App.css';
import './reset.css';
import './modules/style.css'

import { AppRoutes } from './routes';

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AppRoutes />
      </React.Fragment>
    )
  }
}
