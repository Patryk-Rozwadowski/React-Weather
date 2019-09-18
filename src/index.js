import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './store'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
