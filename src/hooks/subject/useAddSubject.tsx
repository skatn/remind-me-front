import { useMutation, useQueryClient } from '@tanstack/react-query';
import { SubjectFormData, SubjectAddResponse } from '../../types/subject';
import { api } from '../../configs/AxiosConfig';
import subjectKeys from './subjectKeys';

const useAddSubject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (request: SubjectFormData) => {
      return api.post<SubjectAddResponse>('/api/subjects', request);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: subjectKeys.list() });
    },
  });
};

export default useAddSubject;
