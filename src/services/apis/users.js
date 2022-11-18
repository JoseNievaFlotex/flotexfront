import axios from "axios";
const baseURL = "http://localhost:5000/user";

let token = null

export const setToken = newToken => {
    token = `Bearer ${newToken}`
}

export const getAll =  () => {
    const config = {
        headers: {
            Authorization: token

        }
    }
  const request =  axios.get(`${baseURL}`, config);
  return request.then(response => response.data);
};

export  const createUser = (newObject) => {
    const config = {
        headers: {
            Authorization: token
        }
    }
    const request = axios.post(baseURL, newObject, config)
    return request.then(response => response.data);
}
// eslint-disable-next-line import/no-anonymous-default-export
export default {setToken, getAll, createUser}