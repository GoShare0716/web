/*global FB*/
import {deliverAlert} from './alert';
import {history} from '../utils';
import {login as loginFromApi} from '../api/auth';




let hasUserFriends,
    hasEmail;
var scroll = require('scroll');
var page = require('scroll-doc')();

export const facebookLogin = () => dispatch => {
    const loginOptions = hasUserFriends
        ? {
            scope: 'public_profile,email,user_friends'
        }
        : {
            scope: 'public_profile,email,user_friends',
            auth_type: 'rerequest'
        };
    FB.login(response => {
        console.log(response);
        if (response.authResponse) {
            callGraphAPI(dispatch, response.authResponse.accessToken);
        } else {
            dispatch({type: '@AUTH/LOGIN_FAIL'});
            dispatch(deliverAlert('登入失敗', 'danger'));
        }
    }, loginOptions);
};

const callGraphAPI = (dispatch, accessToken) => {
    FB.api(`/me/permissions?access_token=${accessToken}`, response => {
        const {data} = response;
        hasUserFriends = hasEmail = true;
        data.forEach(d => {
            const {permission, status} = d;
            if (permission === 'user_friends' && status === 'declined') {
                hasUserFriends = false;
            } else if (permission === 'email' && status === 'declined') {
                hasEmail = false;
            }
        });
        if (!hasUserFriends) {
            dispatch({type: '@AUTH/LOGIN_FAIL'});
            dispatch(deliverAlert('登入失敗。為了讓您知道朋友們報名的工作坊，我們需要您提供朋友名單。', 'danger'));
        } else {
            const fields = hasEmail
                ? 'id,name,picture,email'
                : 'id,name,picture';
            FB.api(`/me?access_token=${accessToken}&fields=${fields}`, response => {
                if (response.error) {
                    dispatch({type: '@AUTH/LOGIN_FAIL'});
                    dispatch(deliverAlert('登入失敗', 'danger'));
                } else {
                    const {id, name, picture} = response;
                    const email = response.email || '';
                    FB.api(`/me/picture?access_token=${accessToken}&width=100&height=100`, response => {
                        if (response.error) {
                            dispatch({type: '@AUTH/LOGIN_FAIL'});
                            dispatch(deliverAlert('登入失敗', 'danger'));
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
    });

}

const login = async(dispatch, user) => {
    try {
        const res = await loginFromApi(user);
        const {fbId, accessToken, role} = res.data;
        localStorage.setItem('fbId', fbId);
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('thumbnailUrl', user.thumbnailUrl);
        localStorage.setItem('role', role);
        dispatch({type: '@AUTH/LOGIN_SUCCESS'});
        dispatch(deliverAlert('登入成功', 'success'));
    } catch (e) {
        dispatch({type: '@AUTH/LOGIN_FAIL'});
        dispatch(deliverAlert('登入失敗', 'danger'));
    }
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
