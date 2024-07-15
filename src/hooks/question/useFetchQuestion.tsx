import { useQuery } from '@tanstack/react-query';
import questionKeys from './questionKeys';
import { api } from '../../configs/AxiosConfig';
import { QuestionGetResponse } from '../../types/question';

const useFetchQuestion = (questionId: number) => {
  return useQuery({
    queryKey: questionKeys.one(questionId),
    queryFn: async () => {
      const response = await api.get<QuestionGetResponse>(
        `/api/questions/${questionId}`,
      );

      return response.data;
    },
  });
};

export default useFetchQuestion;
