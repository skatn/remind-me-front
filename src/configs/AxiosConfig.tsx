import axios from 'axios';
import { useContext, useEffect } from 'react';
import { AuthenticationContext } from '../contexts/AuthenticationContext';

export const api = axios.create({
  baseURL: `${process.env.REACT_APP_HOST}`,
});

export const AxiosConfig = () => {
  const { authentication } = useContext(AuthenticationContext);

  useEffect(() => {
    const requestInterceptor = api.interceptors.request.use((config) => {
      if (authentication.isAuthenticated) {
        config.headers.Authorization = `Bearer ${authentication.accessToken}`;
      }
      return config;
    });

    return () => {
      api.interceptors.request.eject(requestInterceptor);
    };
  }, [authentication]);

  return <></>;
};
