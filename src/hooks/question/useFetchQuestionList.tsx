import questionKeys from './questionKeys';
import { api } from '../../configs/AxiosConfig';
import { ScrollResponse } from '../../types/axios';
import { Question, QuestionListRequest } from '../../types/question';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import useIntersect from '../intersect/useIntersect';

const useFetchQuestionList = (request: QuestionListRequest) => {
  const query = useInfiniteQuery({
    queryKey: questionKeys.list(request.subjectId),
    queryFn: async ({ pageParam }) => {
      const response = await api.get<ScrollResponse<Question>>(
        '/api/questions',
        {
          params: { ...request, cursor: pageParam },
        },
      );
      return response.data;
    },
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });

  const content = useMemo(
    () => (query.data ? query.data.pages.flatMap((data) => data.content) : []),
    [query.data],
  );

  const ref = useIntersect((entry, observer) => {
    observer.unobserve(entry.target);
    if (query.hasNextPage && !query.isFetching) {
      query.fetchNextPage();
    }
  });

  return { ...query, content, ref };
};

export default useFetchQuestionList;
