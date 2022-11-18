import axios from "axios";


const api = axios.create({
    baseURL : "https://api.apis.net.pe",
  });


  
  export const listarTipoCambio = async () => {
    const response = await api.get("/v1/tipo-cambio-sunat");
    console.log(response);
    return response
  }