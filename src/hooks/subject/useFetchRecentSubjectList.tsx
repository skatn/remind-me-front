import { useQuery } from '@tanstack/react-query';
import subjectKeys from './subjectKeys';
import { api } from '../../configs/AxiosConfig';
import { SubjectRecentList } from '../../types/subject';

const useFetchRecentSubjectList = () => {
  return useQuery({
    queryKey: subjectKeys.recentList(),
    queryFn: async () => {
      const response = await api.get<SubjectRecentList>(`/api/subjects/recent`);
      return response.data;
    },
  });
};

export default useFetchRecentSubjectList;
