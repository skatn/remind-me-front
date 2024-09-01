import axios from 'axios';
import { useContext, useEffect } from 'react';
import { AuthenticationContext } from '../contexts/AuthenticationContext';
import useRemindMeNavigate from '../hooks/navigation/useRemindMeNavigate';
import { ReIssueTokenResponse } from '../types/auth';

export const api = axios.create({
  baseURL: `${process.env.REACT_APP_HOST}`,
});

const reissueTokenApi = axios.create({
  baseURL: `${process.env.REACT_APP_HOST}`,
});

export const AxiosConfig = () => {
  const { authentication, clearAuthentication, setTokens } = useContext(
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

    const responseInterceptor = api.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        const config = error.config;
        const status = error.response.status;
        const code = error.response.data.code;

        if (status === 401) {
          if (code === 'AUTH_006') {
            try {
              const response = await reissueTokenApi.post<ReIssueTokenResponse>(
                '/api/reissue-token',
                {
                  refreshToken: authentication.refreshToken,
                },
              );

              setTokens(response.data.accessToken, response.data.refreshToken);
              config.headers.Authorization = `Bearer ${response.data.accessToken}`;
              return reissueTokenApi(config);
            } catch (e: any) {
              clearAuthentication();
              navigate('/login');
            }
          }
        }

        throw error;
      },
    );

    return () => {
      api.interceptors.request.eject(requestInterceptor);
      api.interceptors.response.eject(responseInterceptor);
    };
  }, [authentication, navigate, clearAuthentication, setTokens]);

  return <></>;
};
