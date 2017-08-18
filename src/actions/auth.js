/*global FB*/
import {hideLoading, showLoading} from 'react-redux-loading-bar';

import {deliverAlert} from './alert';
import {history} from '../utils';




// import {login as loginFromApi} from '../api/auth';

var scroll = require('scroll');
var page = require('scroll-doc')();

export const facebookLogin = () => dispatch => {
    dispatch(showLoading());
    FB.getLoginStatus(response => {
        if (response.status === 'connected') {
            callGraphAPI(dispatch, response.authResponse.accessToken);
        } else {
            FB.login(response => {
                if (response.authResponse) {
                    callGraphAPI(dispatch, response.authResponse.accessToken);
                } else {
                    dispatch({type: '@AUTH/LOGIN_FAIL'});
                    dispatch(hideLoading());
                }
            }, {scope: 'public_profile,email,user_friends'});
        }
    });
};

const callGraphAPI = (dispatch, accessToken) => {
    FB.api(`/me?access_token=${accessToken}&fields=id,name,picture,email`, response => {
        if (response.error) {
            dispatch({type: '@AUTH/LOGIN_FAIL'});
            dispatch(hideLoading());
        } else {
            const {email, id, name, picture} = response;
            FB.api(`/me/picture?access_token=${accessToken}&width=100&height=100`, response => {
                if (response.error) {
                    dispatch({type: '@AUTH/LOGIN_FAIL'});
                    dispatch(hideLoading());
                } else {
                    const user = {
                        name,
                        email,
                        fbId: id,
                        accessToken,
                        thumbnailUrl: picture.data.url,
                        pictureUrl: response.data.url
                    }
                    login(dispatch, user);
                }
            });
        }
    });
}

const login = (dispatch, user) => {
    localStorage.setItem('fbId', user.fbId);
    localStorage.setItem('accessToken', '123456');
    localStorage.setItem('thumbnailUrl', user.thumbnailUrl);
    localStorage.setItem('role', 'admin');
    // localStorage.setItem('role', 'member');
    dispatch({type: '@AUTH/LOGIN_SUCCESS'});
    dispatch(deliverAlert('登入成功', 'success'));
    dispatch(hideLoading());
    // loginFromApi(user).then(res => {
    //     console.log(res);
    // ).catch(err => {
    //
    // }).then(() => {
    //
    // });
}

export const facebookLogout = () => dispatch => {
    localStorage.clear();
    FB.getLoginStatus(response => {
        if (response.status === 'connected') {
            FB.logout(response => {
                dispatch({type: '@AUTH/LOGOUT'});
            });
        } else {
            dispatch({type: '@AUTH/LOGOUT'});
        }
    });
    history.push('/');
};

export const unauthenticated = (redirect = true) => dispatch => {
    if (redirect) {
        history.push('/');
    } else {
        scroll.top(page, 0);
    }
    dispatch(deliverAlert('請先登入', 'warning'));
};
