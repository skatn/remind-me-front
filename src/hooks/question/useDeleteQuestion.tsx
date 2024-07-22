import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../../configs/AxiosConfig';
import questionKeys from './questionKeys';

const useDeleteQuestion = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (questionId: number) => {
      return api.delete(`/api/questions/${questionId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: questionKeys.all });
    },
  });
};

export default useDeleteQuestion;
