import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form'
import {auth} from './auth';
import {alert} from './alert';

const reducers = combineReducers({form, auth, alert});

export default reducers;
