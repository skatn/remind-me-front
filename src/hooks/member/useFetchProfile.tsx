import { useQuery } from '@tanstack/react-query';
import { api } from '../../configs/AxiosConfig';
import { MemberProfile } from '../../types/member';
import memberKeys from './memberKeys';

const useFetchProfile = () => {
  return useQuery({
    queryKey: memberKeys.profile(),
    queryFn: async () => {
      const response = await api.get<MemberProfile>('/api/members/me');
      return response.data;
    },
  });
};

export default useFetchProfile;
