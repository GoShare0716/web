import axios from 'axios';


const baseUrl = 'http://localhost:3090/api';
// const baseUrl = 'http://goshare--back-end-dev.us-west-2.elasticbeanstalk.com/api';



const getConfig = () => ({
    headers: {
        fbId: localStorage.getItem('fbId'),
        accessToken: localStorage.getItem('accessToken')
    }
});

export const viewUser = (id) => {
    let url = `${baseUrl}/users/${id}`;
    return axios.get(url, getConfig());
};

export const setUserEmail = (id, email) => {
    let url = `${baseUrl}/users/${id}/email`;
    return axios.put(url, {
        email
    }, getConfig());
};

export const setUserFbUrl = (id, fbUrl) => {
    let url = `${baseUrl}/users/${id}/fbUrl`;
    return axios.put(url, {
        fbUrl
    }, getConfig());
};

export const setUserPersonalWebUrl = (id, personalWebUrl) => {
    let url = `${baseUrl}/users/${id}/personalWebUrl`;
    return axios.put(url, {
        personalWebUrl
    }, getConfig());
};

export const setUserIntroduction = (id, introduction) => {
    let url = `${baseUrl}/users/${id}/introduction`;
    return axios.put(url, {
        introduction
    }, getConfig());
};
