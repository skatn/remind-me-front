import axios from 'axios';
import { useContext, useEffect } from 'react';
import { AuthenticationContext } from '../contexts/AuthenticationContext';
import useRemindMeNavigate from '../hooks/navigation/useRemindMeNavigate';

export const api = axios.create({
  baseURL: `${process.env.REACT_APP_HOST}`,
});

export const AxiosConfig = () => {
  const { authentication, clearAuthentication } = useContext(
    AuthenticationContext,
  );
  const { navigate } = useRemindMeNavigate();

  useEffect(() => {
    const requestInterceptor = api.interceptors.request.use((config) => {
      if (authentication.isAuthenticated) {
        config.headers.Authorization = `Bearer ${authentication.accessToken}`;
      }
      return config;
    });

    api.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response.status === 401) {
          clearAuthentication();
          navigate('/login');
        }

        return Promise.reject(error);
      },
    );

    return () => {
      api.interceptors.request.eject(requestInterceptor);
    };
  }, [authentication, navigate, clearAuthentication]);

  return <></>;
};
