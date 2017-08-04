import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
import {alert} from './alert';
import {loadingBarReducer as loadingBar} from 'react-redux-loading-bar';
import {auth} from './auth';
import {user} from './user';
import {workshopList} from './workshop';
import {skillList} from './skill';

const reducers = combineReducers({
    form,
    alert,
    loadingBar,
    auth,
    user,
    workshopList,
    skillList
});

export default reducers;
