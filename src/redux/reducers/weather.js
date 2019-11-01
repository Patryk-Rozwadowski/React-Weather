import { FETCH_DATA_LOADING, FETCH_DATA_OK, FETCH_DATA_ERROR, IS_MOUNTED} from '../actions/actions';

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
    error: false,
    errorInfo: {},
    errorStatus: {},
    isMounted: false,
    isLoading: false,
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
                errorInfo: action.error.statusText,
                errorStatus: action.error.status,
                error: true
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