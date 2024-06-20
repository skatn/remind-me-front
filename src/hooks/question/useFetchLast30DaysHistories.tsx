import { useQuery } from '@tanstack/react-query';
import { api } from '../../configs/AxiosConfig';
import { QuestionHistory } from '../../types/question';

const useFetchLast30DaysHistories = () => {
  return useQuery({
    queryKey: ['question-history', 'last30days'],
    queryFn: async () => {
      const response = await api.get<QuestionHistory[]>(
        '/api/questions/histories/last-30-days',
      );
      return response.data;
    },
  });
};

export default useFetchLast30DaysHistories;
