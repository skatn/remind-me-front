import { useMutation, useQueryClient } from '@tanstack/react-query';
import { SubjectUpdateRequest } from '../../types/subject';
import { api } from '../../configs/AxiosConfig';

const useAddSubject = (subjectId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (request: SubjectUpdateRequest) => {
      return api.patch(`/api/subjects/${subjectId}`, request);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['subject list'] });
    },
  });
};

export default useAddSubject;
