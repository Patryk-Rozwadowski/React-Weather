import { createStore } from 'redux';
import reducers from '../reducers/weather-reducers';

export const store = createStore(reducers);