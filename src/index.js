import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {compose, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
import reducers from './reducers';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-quill/dist/quill.snow.css'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
const accessToken = localStorage.getItem('accessToken');
if (accessToken) {
    store.dispatch({type: '@AUTH/LOGIN_SUCCESS'});
}

ReactDOM.render(
    <Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
