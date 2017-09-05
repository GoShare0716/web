import 'bootstrap/dist/css/bootstrap.css';
import 'react-quill/dist/quill.snow.css';

import App from './components/App';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import store from './reducers';





const accessToken = localStorage.getItem('accessToken');
if (accessToken) {
    store.dispatch({type: '@AUTH/LOGIN_SUCCESS'});
}

ReactDOM.render(
    <Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
