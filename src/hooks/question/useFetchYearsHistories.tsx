import { api } from '../../configs/AxiosConfig';
import { QuestionYearHistory } from '../../types/question';
import { useSuspenseQuery } from '@tanstack/react-query';

const useFetchYearsHistories = (year: number) => {
  return useSuspenseQuery({
    queryKey: ['question-history', 'year', year],
    queryFn: async () => {
      const response = await api.get<QuestionYearHistory>(
        `/api/questions/histories/${year}`,
      );
      return response.data;
    },
  });
};

export default useFetchYearsHistories;
