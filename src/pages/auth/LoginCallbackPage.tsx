import { useLocation } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { api } from '../../configs/AxiosConfig';
import { MemberProfile } from '../../types/member';
import { ToastContext } from '../../contexts/ToastContext';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import { ErrorResponse } from '../../types/axios';
import { AxiosError } from 'axios';
import useRemindMeNavigate from '../../hooks/navigation/useRemindMeNavigate';

const LoginCallbackPage = () => {
  const { navigate } = useRemindMeNavigate();
  const { addToast } = useContext(ToastContext);
  const { setAuthentication } = useContext(AuthenticationContext);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const accessToken = params.get('accessToken');
    const refreshToken = params.get('refreshToken');

    if (accessToken == null || refreshToken == null) {
      addToast({
        type: 'error',
        title: '로그인 실패',
        description: 'token을 받아오지 못했습니다.',
      });
      navigate('/login', { replace: true });
      return;
    }

    api
      .get<MemberProfile>('/api/members/me', {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((response) => {
        setAuthentication({
          isAuthenticated: true,
          id: response.data.id,
          accessToken: accessToken,
          refreshToken: refreshToken,
        });

        navigate('/', { replace: true });
      })
      .catch((error: AxiosError) => {
        const data: ErrorResponse = error.response!.data as ErrorResponse;
        addToast({
          type: 'error',
          title: '로그인 실패',
          description: data.message,
        });
        navigate('/login', { replace: true });
      });
  }, [navigate, location, setAuthentication, addToast]);

  return <></>;
};

export default LoginCallbackPage;
