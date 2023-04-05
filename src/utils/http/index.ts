import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { HTTP_STATUS, routes } from 'utils';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

async function handleRequet(config: InternalAxiosRequestConfig) {
  let token = localStorage.getItem('token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  config.headers['Content-Type'] = 'application/json';

  return config;
}

async function handleRequestError(error: AxiosError) {
  return Promise.reject(error);
}

async function handleResponse(response: AxiosResponse) {
  const { status } = response;

  if (status === HTTP_STATUS.UNAUTHORIZED) {
    localStorage.clear();
    window.location.href = routes.home.path;
  }

  return response;
}

async function handleResponseError(error: AxiosError) {
  if (error.response?.status === HTTP_STATUS.UNAUTHORIZED) {
    localStorage.clear();
    window.location.href = routes.home.path;
  }

  return Promise.reject(error);
}

export default function axiosInstance() {
  try {
    instance.interceptors.request.use(handleRequet, handleRequestError);

    instance.interceptors.response.use(handleResponse, handleResponseError);

    return instance;
  } catch (error) {
    console.error('unexpected error: ', error);
  } finally {
    return instance;
  }
}
