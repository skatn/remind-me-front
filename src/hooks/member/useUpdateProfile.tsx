import { useMutation, useQueryClient } from '@tanstack/react-query';
import { MemberProfileUpdateRequest } from '../../types/member';
import { api } from '../../configs/AxiosConfig';
import memberKeys from './memberKeys';

const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (request: MemberProfileUpdateRequest) => {
      return api.patch('/api/members/me', request);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: memberKeys.profile });
    },
  });
};

export default useUpdateProfile;
