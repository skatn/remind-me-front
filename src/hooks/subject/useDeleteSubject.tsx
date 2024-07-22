import { useMutation, useQueryClient } from '@tanstack/react-query';
import subjectKeys from './subjectKeys';
import { api } from '../../configs/AxiosConfig';

const useDeleteSubject = (subjectId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => {
      return api.delete(`/api/subjects/${subjectId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: subjectKeys.all });
    },
  });
};

export default useDeleteSubject;
