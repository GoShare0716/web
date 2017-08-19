import {hideLoading, showLoading} from 'react-redux-loading-bar';
import {
    setUserEmail as setUserEmailFromApi,
    setUserFbUrl as setUserFbUrlFromApi,
    setUserIntroduction as setUserIntroductionFromApi,
    setUserPersonalWebUrl as setUserPersonalWebUrlFromApi,
    viewUser as viewUserFromApi
} from '../api/user';

import {deliverAlert} from './alert';
import {history} from '../utils';



export const viewUser = id => async dispatch => {
    dispatch(showLoading());
    try {
        const res = await viewUserFromApi(id);
        const data = res.data;
        dispatch({type: '@USER/VIEW', payload: data});
    } catch (e) {
        history.push(`/`);
        dispatch(deliverAlert('用戶不存在', 'danger'));
    } finally {
        dispatch(hideLoading());
    }
};

export const setUserEmail = (id, email) => async dispatch => {
    dispatch(showLoading());
    try {
        const res = await setUserEmailFromApi(id, email);
        const data = res.data;
        dispatch({type: '@USER/SET_EMAIL', payload: data});
    } catch (e) {
        dispatch(deliverAlert('更新失敗', 'danger'));
    } finally {
        dispatch(hideLoading());
    }
};

export const setUserFbUrl = (id, fbUrl) => async dispatch => {
    dispatch(showLoading());
    try {
        const res = await setUserFbUrlFromApi(id, fbUrl);
        const data = res.data;
        dispatch({type: '@USER/SET_FB_URL', payload: data});
    } catch (e) {
        dispatch(deliverAlert('更新失敗', 'danger'));
    } finally {
        dispatch(hideLoading());
    }
};

export const setUserPersonalWebUrl = (id, personalWebUrl) => async dispatch => {
    dispatch(showLoading());
    try {
        const res = await setUserPersonalWebUrlFromApi(id, personalWebUrl);
        const data = res.data;
        dispatch({type: '@USER/SET_PERSONAL_WEB_URL', payload: data});
    } catch (e) {
        dispatch(deliverAlert('更新失敗', 'danger'));
    } finally {
        dispatch(hideLoading());
    }
};

export const setUserIntroduction = (id, introduction) => async dispatch => {
    dispatch(showLoading());
    try {
        const res = await setUserIntroductionFromApi(id, introduction);
        const data = res.data;
        dispatch({type: '@USER/SET_INTRODUCTION', payload: data});
    } catch (e) {
        dispatch(deliverAlert('更新失敗', 'danger'));
    } finally {
        dispatch(hideLoading());
    }
};
