import axios from "axios";

const AxiosInstance = axios.create({
  // baseURL: `${process.env.REACT_APP_SERVER_URL}`,
  baseURL: `http://localhost:8888`,
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

AxiosInstance.interceptors.request.use(
  config => addJwtToRequest(config),
  error => Promise.reject(error)
);

export default AxiosInstance;