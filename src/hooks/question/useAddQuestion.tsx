import { useMutation, useQueryClient } from '@tanstack/react-query';
import questionKeys from './questionKeys';
import { QuestionAddRequest, QuestionAddResponse } from '../../types/question';
import { api } from '../../configs/AxiosConfig';

const useAddQuestion = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (request: QuestionAddRequest) => {
      return api.post<QuestionAddResponse>('/api/questions', request);
    },
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: questionKeys.list(variables.subjectId),
      });
    },
  });
};

export default useAddQuestion;
