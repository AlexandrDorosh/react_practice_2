import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

const getUsers = () => {
    return axiosInstance('/users/');
}

const getUser = (id) => {
    return axiosInstance('/posts/' + id);
}

export {getUser, getUsers};