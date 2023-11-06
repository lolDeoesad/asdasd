import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
  headers: {
    'Content-Type' : 'application/json; charset=utf-8'
  }
});

function addJwtToRequest(config) {
  const jwt = sessionStorage.getItem('jwt');
  if(jwt) {
    config.headers['Authorization'] = `Bearer ${jwt}`;
  }
  return config;
}

axiosInstance.interceptors.request.use(
  config => addJwtToRequest(config),
  error => Promise.reject(error)
);

export default axiosInstance;