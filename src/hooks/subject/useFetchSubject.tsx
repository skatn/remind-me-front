import { useSuspenseQuery } from '@tanstack/react-query';
import { api } from '../../configs/AxiosConfig';
import { SubjectDetails } from '../../types/subject';
import subjectKeys from './subjectKeys';

const useFetchSubject = (subjectId: number) => {
  return useSuspenseQuery({
    queryKey: subjectKeys.one(subjectId),
    queryFn: async () => {
      const response = await api.get<SubjectDetails>(
        `/api/subjects/${subjectId}`,
      );
      return response.data;
    },
  });
};

export default useFetchSubject;
