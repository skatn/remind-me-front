import { useQuery } from '@tanstack/react-query';
import { api } from '../../configs/AxiosConfig';
import { Subject } from '../../types/subject';

const useFetchSubject = (subjectId: number) => {
  return useQuery({
    queryKey: ['subject', subjectId],
    queryFn: async () => {
      const response = await api.get<Subject>(`/api/subjects/${subjectId}`);
      return response.data;
    },
  });
};

export default useFetchSubject;
