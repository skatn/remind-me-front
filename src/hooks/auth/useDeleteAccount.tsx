import { useContext } from 'react';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../../configs/AxiosConfig';
import memberKeys from '../member/memberKeys';
import useRemindMeNavigate from '../navigation/useRemindMeNavigate';

const useDeleteAccount = () => {
  const { clearAuthentication } = useContext(AuthenticationContext);
  const { navigate } = useRemindMeNavigate();
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
