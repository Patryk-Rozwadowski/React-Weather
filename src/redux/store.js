import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import weather from './reducers/weather';
import DevTools from './DevTools/DevTools'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    weather,
    composeEnhancer(
        applyMiddleware(thunk),
    )
);