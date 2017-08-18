import {workshopList, workshopManage, workshopView} from './workshop';

import {alert} from './alert';
import {auth} from './auth';
import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
import {loadingBarReducer as loadingBar} from 'react-redux-loading-bar';
import {user} from './user';





const reducers = combineReducers({
    form,
    alert,
    loadingBar,
    auth,
    user,
    workshopList,
    workshopView,
    workshopManage,
});

export default reducers;
