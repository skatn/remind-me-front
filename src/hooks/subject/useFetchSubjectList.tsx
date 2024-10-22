import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import {
  SubjectListGetRequest,
  SubjectListGetResponse,
} from '../../types/subject';
import { api } from '../../configs/AxiosConfig';
import { useMemo } from 'react';
import useIntersect from '../intersect/useIntersect';
import subjectKeys from './subjectKeys';

const useFetchSubjectList = (request: SubjectListGetRequest) => {
  const query = useSuspenseInfiniteQuery({
    queryKey: [...subjectKeys.list(), request.size, request.title],
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
