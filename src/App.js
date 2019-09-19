import React from 'react';
import axios from 'axios';
import './App.css';
import './reset.css';
import './modules/style.css'

import Temperature from './modules/Temperature/Temperature';
import ErrorInfo from './modules/ErrorInfo/ErrorInfo';
import LoadingAnimation from './modules/LoadingAnimation/LoadingAnimation';
import CityInput from './modules/CityInput/CityInput';
import General from './modules/General/General';
import Home from './modules/Home/Home';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      city: '',
      country: '',
      description: '',
      input: '',
      time: '',
      temperature: {
        temp: '',
        tempMax: '',
        tempMin: '',
      },
      humidity: '',
      pressure: '',
      cloudinnes: '',
      weather: '',
      windSpeed: '',
      windDeg: '',
      icon: '',
      notFound: '',
      error: '',
      errorStatus: '',
      errorInfo: '',
      isLoading: false,
      isMounted: false,
    }
  }

  componentWillUnmount = () => {
    this.setState({ isMounted: false });
  }

  fetchData = async e => {
    e.preventDefault();

    const { input } = this.state;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=4608dbdd344e79698ed563db79599f06`;
    this.setState({ isLoading: true })
    this._isMount = false;
    axios
      .get(url)
      .then(res => this.setState({
        temperature: { temp: res.data.main.temp, tempMax: res.data.main.temp_max, tempMin: res.data.main.temp_min },
        description: res.data.weather[0].description,
        icon: res.data.weather[0].icon,
        humidity: res.data.main.humidity,
        pressure: res.data.main.pressure,
        cloudinnes: res.data.clouds.all,
        windSpeed: res.data.wind.speed,
        windDeg: res.data.wind.deg,
        city: input,
        country: res.data.sys.country,
        isLoading: false,
        error: false,
        isMounted: true
      }))

      .catch(error => this.setState({ error: true, errorStatus: error.cod, errorInfo: error.message, isLoading: false }))
  }

  onChangeHandler = (e) => {

    if (e.target.value > 4) {
      this.s();
      this.setState({
        input: e.target.value,
      });
    }
    else {
      this.setState({
        input: e.target.value,
      });
    }
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

  submitHandler = e => {
    e.preventDefault();
    this.getTimeHandler();
    this.fetchData(e);
  }

  render() {
    return (
      <div className='App'>
        <div className='container'>

          <nav>
            <CityInput
              submit={e => this.submitHandler(e)}
              cityValue={this.state.input}
              onChangeHandler={e => this.onChangeHandler(e)}
            />
          </nav>

          <main>

            {
              this.state.error === true && <ErrorInfo
                errorStatus={this.state.errorStatus}
                errorInfo={this.state.errorInfo} />
            }

            {
              this.state.input === '' && <Home
                homeTitle='Weather in your city' 
                homeText='Write city in searcher'/>
            }

            {
              this.state.isLoading === true && <LoadingAnimation />
            }


            {
              this.state.isMounted === true &&

              <div className='GeneralContainer'>
                <General
                  city={this.firstLetterCapitalize(this.state.city)}
                  time={this.state.time}
                  country={this.state.country}
                />
                <Temperature
                  temp={this.oneDigitFormat(this.state.temperature.temp) || '0'}
                  icon={`http://openweathermap.org/img/wn/${this.state.icon}@2x.png`}
                  tempMin={this.oneDigitFormat(this.state.temperature.tempMin) || '0'}
                  tempMax={this.oneDigitFormat(this.state.temperature.tempMax) || '0'}
                  desc={this.firstLetterCapitalize(this.state.description) || '0'}
                  windSpeed={this.state.windSpeed}
                  windDeg={{ transform: `rotate(${this.state.windDeg}deg)` }}
                  pressure={this.oneDigitFormat(this.state.pressure)}
                  cloud={this.state.cloudinnes}
                  humidity={this.state.humidity}
                />
              </div>

            }

          </main>
        </div>
      </div>
    )
  }
}
export default App;
