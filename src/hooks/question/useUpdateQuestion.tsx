import { useMutation, useQueryClient } from '@tanstack/react-query';
import questionKeys from './questionKeys';
import { QuestionUpdateRequest } from '../../types/question';
import { api } from '../../configs/AxiosConfig';
import { useEffect, useState } from 'react';
import useInvalid from '../valid/useInvalid';
import useFetchQuestion from './useFetchQuestion';

const useUpdateQuestion = (questionId: number) => {
  const queryClient = useQueryClient();

  const [param, setParam] = useState<QuestionUpdateRequest>({
    question: '',
    questionImage: '',
    questionType: 'CHOICE',
    answers: [{ answer: '', isAnswer: true }],
    explanation: '',
  });

  const { invalidField, check } = useInvalid({
    question: [],
    questionType: [],
    'answers[].answer': [],
    explanation: [],
  });

  const { data, isSuccess } = useFetchQuestion(questionId);
  useEffect(() => {
    if (isSuccess) {
      setParam({
        question: data.question,
        questionType: data.questionType,
        questionImage: data.questionImage,
        answers: data.answers,
        explanation: data.explanation,
      });
    }
  }, [data, isSuccess, setParam]);

  const mutation = useMutation({
    mutationFn: (request: QuestionUpdateRequest) => {
      return api.patch(`/api/questions/${questionId}`, request);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: questionKeys.all });
    },
  });
  return { param, setParam, invalidField, check, ...mutation };
};

export default useUpdateQuestion;
