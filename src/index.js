import 'bootstrap/dist/css/bootstrap.css';
import 'react-quill/dist/quill.snow.css';

import {applyMiddleware, compose, createStore} from 'redux';

import App from './components/App';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';






const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
const accessToken = localStorage.getItem('accessToken');
if (accessToken) {
    store.dispatch({type: '@AUTH/LOGIN_SUCCESS'});
}

ReactDOM.render(
    <Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
