import axios from 'axios';

const baseUrl = 'http://goshareback-end-test-dev.us-west-2.elasticbeanstalk.com/api';

export function login(user) {
    let url = `${baseUrl}/login/facebook`;
    return axios.post(url, user);
}
