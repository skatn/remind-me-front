import { useMutation, useQueryClient } from '@tanstack/react-query';
import { SubjectAddRequest, SubjectAddResponse } from '../../types/subject';
import { api } from '../../configs/AxiosConfig';

const useAddSubject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (request: SubjectAddRequest) => {
      return api.post<SubjectAddResponse>('/api/subjects', request);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['subject list'] });
    },
  });
};

export default useAddSubject;
