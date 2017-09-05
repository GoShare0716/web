import {applyMiddleware, compose, createStore} from 'redux';
import {workshopList, workshopManage, workshopView} from './workshop';

import {alert} from './alert';
import {auth} from './auth';
import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
import {loadingBarReducer as loadingBar} from 'react-redux-loading-bar';
import thunk from 'redux-thunk';
import {user} from './user';






const reducers = combineReducers({
    form,
    alert,
    loadingBar,
    auth,
    user,
    workshopList,
    workshopView,
    workshopManage
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
