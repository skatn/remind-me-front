import { useQuery } from '@tanstack/react-query';
import { api } from '../../configs/AxiosConfig';
import { Subject } from '../../types/subject';
import subjectKeys from './subjectKeys';

const useFetchSubject = (subjectId: number) => {
  return useQuery({
    queryKey: subjectKeys.one(subjectId),
    queryFn: async () => {
      const response = await api.get<Subject>(`/api/subjects/${subjectId}`);
      return response.data;
    },
  });
};

export default useFetchSubject;
