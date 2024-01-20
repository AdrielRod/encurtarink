import axios from "axios";

const api = axios.create({
    baseURL: 'https://url.api.stdlib.com/temporary@0.3.0/', // Adapte para sua baseURL
    timeout: 10000,
  });
  
export default api