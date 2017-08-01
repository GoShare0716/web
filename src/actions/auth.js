/*global FB*/
import {login as loginFromApi} from '../api/auth';
import {deliverAlert} from './alert';

export const facebookLogin = () => dispatch => {
    FB.getLoginStatus(response => {
        if (response.status === 'connected') {
            callGraphAPI(dispatch, response.authResponse.accessToken);
        } else {
            FB.login(response => {
                if (response.authResponse) {
                    callGraphAPI(dispatch, response.authResponse.accessToken);
                } else {
                    dispatch({type: '@AUTH/LOGIN_FAIL'});
                }
            }, {scope: 'public_profile,email,user_friends'});
        }
    });
};

const callGraphAPI = (dispatch, accessToken) => {
    FB.api(`/me?access_token=${accessToken}&fields=id,name,picture,email`, response => {
        if (response.error) {
            dispatch({type: '@AUTH/LOGIN_FAIL'});
        } else {
            const {email, id, name, picture} = response;
            FB.api(`/me/picture?access_token=${accessToken}&width=100&height=100`, response => {
                if (response.error) {
                    dispatch({type: '@AUTH/LOGIN_FAIL'});
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
    localStorage.setItem('accessToken', '123456');
    localStorage.setItem('thumbnailUrl', user.thumbnailUrl);
    dispatch({type: '@AUTH/LOGIN_SUCCESS'});
    dispatch(deliverAlert('登入成功', 'success'));
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
};
