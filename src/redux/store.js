import { createStore } from 'redux';
import  weatherReducer from './reducers/weather';
import DevTools from './DevTools/DevTools'

export const store = createStore(
    weatherReducer,
    DevTools.instrument()
    );