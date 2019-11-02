import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import countStore from './components/Store'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <Provider store={countStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
