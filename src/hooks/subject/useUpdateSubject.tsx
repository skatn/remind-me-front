import { useMutation, useQueryClient } from '@tanstack/react-query';
import { SubjectUpdateRequest } from '../../types/subject';
import { api } from '../../configs/AxiosConfig';
import useFetchSubject from './useFetchSubject';
import { useEffect, useState } from 'react';
import subjectKeys from './subjectKeys';

const useUpdateSubject = (subjectId: number) => {
  const queryClient = useQueryClient();
  const [params, setParams] = useState<SubjectUpdateRequest>({
    title: '',
    color: '',
  });

  const { data: subject, isLoading } = useFetchSubject(Number(subjectId));
  useEffect(() => {
    if (!isLoading && subject) {
      setParams({ color: subject.color, title: subject.title });
    }
  }, [subject, isLoading, setParams]);

  const mutation = useMutation({
    mutationFn: (request: SubjectUpdateRequest) => {
      return api.patch(`/api/subjects/${subjectId}`, request);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: subjectKeys.all });
    },
  });

  return { params, setParams, ...mutation };
};

export default useUpdateSubject;
