import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../../configs/AxiosConfig';
import { LogoutRequest } from '../../types/auth';
import { useContext } from 'react';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import memberKeys from '../member/memberKeys';
import { useNavigate } from 'react-router-dom';

const useLogout = () => {
  const { clearAuthentication, authentication } = useContext(
    AuthenticationContext,
  );
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (request: LogoutRequest) => {
      return api.post('/api/logout', request);
    },
    onSettled: () => {
      clearAuthentication();
      queryClient.invalidateQueries({ queryKey: memberKeys.all });
      navigate('/login');
    },
  });

  const logout = () => {
    mutation.mutate({ refreshToken: authentication.refreshToken });
  };

  return { logout, ...mutation };
};

export default useLogout;
