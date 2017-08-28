import axios from 'axios';


const baseUrl = 'http://goshare--back-end-dev.us-west-2.elasticbeanstalk.com/api';
// const baseUrl = 'http://localhost:3090/api';

const getConfig = () => ({
    headers: {
        fbId: localStorage.getItem('fbId'),
        accessToken: localStorage.getItem('accessToken')
    }
});

export const login = (auth) => {
    let url = `${baseUrl}/login/facebook`;
    return axios.post(url, auth, getConfig());
};
