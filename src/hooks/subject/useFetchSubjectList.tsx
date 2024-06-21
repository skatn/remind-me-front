import { useInfiniteQuery } from '@tanstack/react-query';
import {
  SubjectListGetRequest,
  SubjectListGetResponse,
} from '../../types/subjectType';
import { api } from '../../configs/AxiosConfig';
import { useMemo } from 'react';
import useIntersect from '../intersect/useIntersect';

const useFetchSubjectList = (request: SubjectListGetRequest) => {
  const query = useInfiniteQuery({
    queryKey: ['subject list', request.size, request.cursor, request.title],
    queryFn: async ({ pageParam }) => {
      const response = await api.get<SubjectListGetResponse>('/api/subjects', {
        params: { ...request, cursor: pageParam },
      });
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

export default useFetchSubjectList;
