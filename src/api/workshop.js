import axios from 'axios';


const baseUrl = 'http://localhost:3090/api';
// const baseUrl = 'http://goshare--back-end-dev.us-west-2.elasticbeanstalk.com/api';

const getConfig = () => ({
    headers: {
        fbId: '1833867746937550', //localStorage.getItem('fbId'),
        accessToken: 'EAAZAwGb8RZBdUBAAlvov35Ih7iaKXTTc6Ij9qIR9IR5aATJzq1uk8lG7LYZB02zypaEQZBZCsdS4vwDu3NVKQUPEszsyS3lX0hv9DSzd9TKH3NRacC5cAmMzfZBaDJiz4kZATLDzfAaPUdvZCOihO9ZBAGLfeYLaZCCTmj1vb0wDfTxAZDZD' //localStorage.getItem('accessToken')
    }
});

export const createWorkshop = (workshop) => {
    let url = `${baseUrl}/workshops`;
    return axios.post(url, workshop, getConfig());
};

export const listWorkshop = (seartchText, category, ordering, state) => {
    let url = `${baseUrl}/workshops?seartchText=${seartchText}&category=${category}&ordering=${ordering}&state=${state}`;
    return axios.get(url, getConfig());
};

export const viewWorkshop = (id) => {
    let url = `${baseUrl}/workshops/${id}`;
    return axios.get(url, getConfig());
};

export const updateWorkshop = (workshop) => {
    let url = `${baseUrl}/workshops/${workshop.id}`;
    return axios.put(url, workshop, getConfig());
};

export const getWorkshopState = (id) => {
    let url = `${baseUrl}/workshops/${id}/state`;
    return axios.get(url, getConfig());
};

export const setWorkshopState = (id, state) => {
    let url = `${baseUrl}/workshops/${id}/state`;
    return axios.put(url, {
        state
    }, getConfig());
};

export const getWorkshopPublished = (id) => {
    let url = `${baseUrl}/workshops/${id}/published`;
    return axios.get(url, getConfig());
};

export const setWorkshopPublished = (id, published) => {
    let url = `${baseUrl}/workshops/${id}/published`;
    return axios.put(url, {
        published
    }, getConfig());
};

export const getWorkshopAttendees = (id) => {
    let url = `${baseUrl}/workshops/${id}/attendees`;
    return axios.get(url, getConfig());
};

export const attendWorkshop = (id) => {
    let url = `${baseUrl}/workshops/${id}`;
    return axios.post(url, {}, getConfig());
};

export const deleteWorkshop = (id) => {
    let url = `${baseUrl}/workshops/${id}`;
    return axios.delete(url, getConfig());
};
