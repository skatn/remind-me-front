import { useContext } from 'react';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../../configs/AxiosConfig';
import memberKeys from '../member/memberKeys';

const useDeleteAccount = () => {
  const { clearAuthentication } = useContext(AuthenticationContext);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => {
      return api.delete('/api/members/me');
    },
    onSettled: () => {
      clearAuthentication();
      queryClient.invalidateQueries({ queryKey: memberKeys.all });
      navigate('/login');
    },
  });

  const deleteAccount = () => {
    mutation.mutate(undefined);
  };

  return { deleteAccount, ...mutation };
};

export default useDeleteAccount;
