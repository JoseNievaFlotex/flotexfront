import axios from "axios";

const api = axios.create({
  baseURL : "https://herokuservicerestapi.herokuapp.com",
});


export const loginUser = async credentials => {
  const email = credentials ? credentials.email : null;
  const password = credentials ? credentials.password : null;
  try {
    const {data} = await api.post("/user/login", {email , password});
    return data;
    
  } catch (error) {
    throw Error(error.response.data.message);
  }
  
}
