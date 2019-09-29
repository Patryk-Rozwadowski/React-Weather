import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import weather from './reducers/weather';
import DevTools from './DevTools/DevTools'

export const store = createStore(
    weather,
    compose(
        applyMiddleware(thunk),
        DevTools.instrument()
    )
);