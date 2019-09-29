import React from 'react';

import './App.css';
import './reset.css';
import './modules/style.css'

import Temperature from './modules/Temperature/Temperature';
import ErrorInfo from './modules/ErrorInfo/ErrorInfo';
import LoadingAnimation from './modules/LoadingAnimation/LoadingAnimation';
import CityInput from './modules/CityInput/CityInput'
import General from './modules/General/General';

import CityInputContainer from './modules/Containers/cityInput.container'
import DevTools from './redux/DevTools/DevTools';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  firstLetterCapitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  oneDigitFormat = (num) => {
    return num ? num.toFixed(1) : null;
  }

  getTimeHandler = () => {
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
      <div className='App'>
        <CityInputContainer />
        <DevTools />
      </div>
    )
  }
}
export default App;
