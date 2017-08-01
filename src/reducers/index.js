import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form'
import {auth} from './auth';

const reducers = combineReducers({form, auth});

export default reducers;
