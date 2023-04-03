import axios from "axios";

const BASE_URL = 'https://6426c5d0556bad2a5b579e63.mockapi.io';
// axios.defaults.baseURL = BASE_URL;

// const URL = process.env.REACT_APP_URL

const instance = axios.create({
  baseURL: BASE_URL,
//   timeout: 1000,
  headers: {'Content-Type': 'application/json'}
});

export const postData = async (url, data) => {
    try {
       return await instance.post(`/${url}`, JSON.stringify(data))
    } catch (error) {
        return console.log(error);
    }
}

export const getData = url => {
    try {
        return  instance.get(`/${url}`)
    } catch ( error) {
        return console.log(error);
    }
}

export const deleteData = async url => {
    try {
        return instance.delete(`/${url}`)
    } catch (error) {
        return console.log(error);
    }
}

export const updateData = async (url, data) => {
    try {
        return instance.put(`/${url}`, data)
    } catch (error) {
        return console.log(error);
    }
}
