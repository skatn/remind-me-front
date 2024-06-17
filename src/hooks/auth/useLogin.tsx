import { useMutation } from '@tanstack/react-query';
import { api } from '../../configs/AxiosConfig';
import { LoginRequest, LoginResponse } from '../../types/auth';
import { useContext } from 'react';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import { MemberProfile } from '../../types/member';

const useLogin = () => {
  const { setAuthentication } = useContext(AuthenticationContext);

  return useMutation({
    mutationFn: (loginRequest: LoginRequest) =>
      api.post<LoginResponse>('/api/login', loginRequest),
    onSuccess: async (response) => {
      const memberProfile = (
        await api.get<MemberProfile>('/api/members/me', {
          headers: { Authorization: `Bearer ${response.data.accessToken}` },
        })
      ).data;

      setAuthentication({
        isAuthenticated: true,
        id: memberProfile.id,
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken,
      });
    },
  });
};

export default useLogin;
