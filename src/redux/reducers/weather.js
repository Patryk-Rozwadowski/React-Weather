import {FETCH_DATA_LOADING, FETCH_DATA_OK, FETCH_DATA_ERROR, IS_MOUNTED} from '../actions/actions';

const initialState = {
    weather: {},
    temperature: {},
    wind: {},
    clouds: {},
    sys: {},
    pressure: {},
    humidity: {},
    city: {},
    country: {},
    isLoading: false,
    error: null,
    isMounted: false
}

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_DATA_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }

        case FETCH_DATA_OK:
            return {
                ...state,
                isLoading: false,
                city: action.data,
                country: action.data.sys,
                temperature: action.data.main,
                pressure: action.data.main,
                humidity: action.data.main,
                weather: action.data.weather[0],
                wind: action.data.wind,
                clouds: action.data.clouds,
                sys: action.data.sys
            }
            
        case FETCH_DATA_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.status
            }
            
        case IS_MOUNTED:
            return {
              ...state,
              isMounted: action.isMounted
            }

        default: 
            return state;
    }
}

export default weatherReducer;

 /* const { input } = this.state;
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
    
    
    ///
    <div className='container'>

           <nav>
            <CityInput
              submit={e => this.s(e)}
              cityValue={this.state.input}
              onChangeHandler={e => this.onChangeHandler(e)}
            />
          </nav>

          <main>

            {this.state.error === true && <ErrorInfo errorStatus={this.state.errorStatus} errorInfo={this.state.errorInfo} />}

            {this.state.input === '' && <h1>Write your city</h1>}

            {this.state.isLoading === true && <LoadingAnimation />}


            {this.state.isMounted === true && <div className='GeneralContainer'>
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
    
    
    
    
    
    */