import { useMutation, useQueryClient } from '@tanstack/react-query';
import { SubjectFormData } from '../../types/subject';
import { api } from '../../configs/AxiosConfig';
import subjectKeys from './subjectKeys';

const useUpdateSubject = (subjectId: number) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (request: SubjectFormData) => {
      return api.patch(`/api/subjects/${subjectId}`, request);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: subjectKeys.all });
    },
  });

  return { ...mutation };
};

export default useUpdateSubject;
