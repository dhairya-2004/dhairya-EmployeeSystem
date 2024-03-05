import axios from 'axios'

const EMPLOYEE_BASE_REST_API_URL = 'http://localhost:8080/api/v1/signup';


export const login = (credentials) => {
    return axios.post(EMPLOYEE_BASE_REST_API_URL,credentials);
};