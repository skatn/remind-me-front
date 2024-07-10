import { useMutation } from '@tanstack/react-query';
import { api } from '../../configs/AxiosConfig';
import {
  QuestionSubmitRequest,
  QuestionSubmitResponse,
} from '../../types/question';

const useSubmitQuestion = () => {
  return useMutation({
    mutationFn: (request: QuestionSubmitRequest) => {
      return api.post<QuestionSubmitResponse>('/api/questions/submit', request);
    },
  });
};

export default useSubmitQuestion;
