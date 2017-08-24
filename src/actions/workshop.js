import {
    attendWorkshop as attendWorkshopFromApi,
    createWorkshop as createWorkshopFromApi,
    deleteWorkshop as deleteWorkshopFromApi,
    getWorkshopAttendees as getWorkshopAttendeesFromApi,
    getWorkshopPublished as getWorkshopPublishedFromApi,
    getWorkshopState as getWorkshopStateFromApi,
    listWorkshop as listWorkshopFromApi,
    setWorkshopPublished as setWorkshopPublishedFromApi,
    setWorkshopState as setWorkshopStateFromApi,
    updateWorkshop as updateWorkshopFromApi,
    viewWorkshop as viewWorkshopFromApi
} from '../api/workshop';
import {hideLoading, showLoading} from 'react-redux-loading-bar';

import {deliverAlert} from './alert';
import {history} from '../utils';



export const createWorkshop = workshop => async dispatch => {
    dispatch(showLoading());
    try {
        const res = await createWorkshopFromApi(workshop);
        const data = res.data;
        history.push(`/workshop/${data.id}`);
    } catch (e) {
        dispatch(deliverAlert('送出失敗', 'danger'));
    } finally {
        dispatch(hideLoading());
    }
};

export const listWorkshop = (seartchText, category, ordering, state) => async dispatch => {
    dispatch(showLoading());
    try {
        const res = await listWorkshopFromApi(seartchText, category, ordering, state);
        const data = res.data;
        dispatch({type: '@WORKSHOP/LIST', payload: data});
    } catch (e) {
        console.log(e);
        dispatch(deliverAlert('讀取失敗', 'danger'));
    } finally {
        dispatch(hideLoading());
    }
};

export const viewWorkshop = id => async dispatch => {
    dispatch(showLoading());
    try {
        const res = await viewWorkshopFromApi(id);
        const data = res.data;
        dispatch({type: '@WORKSHOP/VIEW', payload: data});
    } catch (e) {
        history.push(`/`);
        console.log(e);
        dispatch(deliverAlert('工作坊不存在', 'danger'));
    } finally {
        dispatch(hideLoading());
    }
};

export const updateWorkshop = workshop => async dispatch => {
    dispatch(showLoading());
    try {
        const res = await updateWorkshopFromApi(workshop);
        const data = res.data;
        history.push(`/workshop/${data.id}`);
        dispatch(deliverAlert('編輯成功', 'success'));
    } catch (e) {
        dispatch(deliverAlert('編輯失敗', 'danger'));
    } finally {
        dispatch(hideLoading());
    }
};

export const getWorkshopState = id => async dispatch => {
    dispatch(showLoading());
    try {
        const res = await getWorkshopStateFromApi(id);
        const data = res.data;
        dispatch({type: '@WORKSHOP/GET_STATE', payload: data});
    } catch (e) {
        dispatch(deliverAlert('狀態取得失敗', 'danger'));
    } finally {
        dispatch(hideLoading());
    }
};

export const setWorkshopState = (id, state) => async dispatch => {
    dispatch(showLoading());
    try {
        const res = await setWorkshopStateFromApi(id, state);
        const data = res.data;
        dispatch({type: '@WORKSHOP/SET_STATE', payload: data});
    } catch (e) {
        dispatch(deliverAlert('狀態更新失敗', 'danger'));
    } finally {
        dispatch(hideLoading());
    }
};

export const getWorkshopPublished = id => async dispatch => {
    dispatch(showLoading());
    try {
        const res = await getWorkshopPublishedFromApi(id);
        const data = res.data;
        dispatch({type: '@WORKSHOP/GET_PUBLISHED', payload: data});
    } catch (e) {
        dispatch(deliverAlert('顯示狀態取得失敗', 'danger'));
    } finally {
        dispatch(hideLoading());
    }
};

export const setWorkshopPublished = (id, published) => async dispatch => {
    dispatch(showLoading());
    try {
        const res = await setWorkshopPublishedFromApi(id, published);
        const data = res.data;
        dispatch({type: '@WORKSHOP/SET_PUBLISHED', payload: data});
    } catch (e) {
        dispatch(deliverAlert('顯示狀態更新失敗', 'danger'));
    } finally {
        dispatch(hideLoading());
    }
};

export const getWorkshopAttendees = (id) => async dispatch => {
    dispatch(showLoading());
    try {
        const res = await getWorkshopAttendeesFromApi(id);
        const data = res.data;
        dispatch({type: '@WORKSHOP/GET_ATTENDEES', payload: data});
    } catch (e) {
        dispatch(deliverAlert('參加人名單取得失敗', 'danger'));
    } finally {
        dispatch(hideLoading());
    }
};

export const attendWorkshop = id => async dispatch => {
    dispatch(showLoading());
    try {
        const res = await attendWorkshopFromApi(id);
        const data = res.data;
        dispatch({type: '@WORKSHOP/ATTEND', payload: data});
    } catch (e) {
        console.log(e);
        
        dispatch(deliverAlert('報名失敗', 'danger'));
    } finally {
        dispatch(hideLoading());
    }
};

export const deleteWorkshop = id => async dispatch => {
    dispatch(showLoading());
    try {
        await deleteWorkshopFromApi(id);
        history.push('/workshop');
        dispatch(deliverAlert('刪除成功', 'success'));
    } catch (e) {
        dispatch(deliverAlert('刪除失敗', 'danger'));
    } finally {
        dispatch(hideLoading());
    }
};
