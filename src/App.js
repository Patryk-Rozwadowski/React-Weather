import React from 'react';
import axios from 'axios';
import './App.css';
import './reset.css';
import './modules/style.css'

import Temperature from './modules/Temperature/Temperature';
import ErrorInfo from './modules/ErrorInfo/ErrorInfo';
import LoadingAnimation from './modules/LoadingAnimation/LoadingAnimation';
import CityInput from './modules/CityInput/CityInput'
import General from './modules/General/General';

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
      weather: '',
      speed: '',
      degree: '',
      icon: '',
      notFound: '',
      error: '',
      errorStatus: '',
      errorInfo: '',
      isLoading: false
    }
  }

  fetchData = async (e) => {
    e.preventDefault();

    const { input } = this.state;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=4608dbdd344e79698ed563db79599f06`;
    this.setState({ isLoading: true })
    axios.get(url)
      .then(res => this.setState({
        temperature: { temp: res.data.main.temp, tempMax: res.data.main.temp_max, tempMin: res.data.main.temp_min },
        description: res.data.weather[0].description,
        icon: res.data.weather[0].icon,
        humidity: res.data.main.humidity,
        pressure: res.data.main.pressure,
        speed: res.data.wind.speed,
        city: input,
        country: res.data.sys.country,
        isLoading: false,
        error: false
      }))

      .catch(error => this.setState({ error: true, errorStatus: error.cod, errorInfo: error.message, isLoading: false }))
  }

  onChangeHandler = (e) => {
    console.log(this.state.description)
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

  temperatureFormat(num) {
    return num.toFixed(1);
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

  s = e => {
    e.preventDefault();
    this.getTimeHandler();
    this.fetchData(e);
  }

  render() {
    return (
      <div className='App'>
        <div className='container'>

          <div>
            <CityInput
              submit={e => this.s(e)}
              cityValue={this.state.input}
              onChangeHandler={e => this.onChangeHandler(e)}
            />
          </div>

          <main>

            {this.state.error === true && <ErrorInfo errorStatus={this.state.errorStatus} errorInfo={this.state.errorInfo} />}

            {this.state.input === '' && <h1>Write your city</h1>}

            {this.state.isLoading === true && <LoadingAnimation />}

            {this.state.error === false &&
              <div className='GeneralContainer'>
                <General
                city={this.firstLetterCapitalize(this.state.city)}
                  time={this.state.time}
                  country={this.state.country}
                />
                <Temperature
                  temp={this.temperatureFormat(this.state.temperature.temp)}
                  icon={`http://openweathermap.org/img/wn/${this.state.icon}@2x.png`}
                  tempMin={this.state.temperature.tempMin}
                  tempMax={this.state.temperature.tempMax}
                desc={this.firstLetterCapitalize(this.state.description)}
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
