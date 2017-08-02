import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form'
import {alert} from './alert';
import {loadingBarReducer as loadingBar} from 'react-redux-loading-bar'
import {auth} from './auth';

const reducers = combineReducers({form, alert, loadingBar, auth});

export default reducers;
