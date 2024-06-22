import { useMutation } from '@tanstack/react-query';
import { SubjectAddRequest, SubjectAddResponse } from '../../types/subject';
import { api } from '../../configs/AxiosConfig';

const useAddSubject = () => {
  return useMutation({
    mutationFn: (request: SubjectAddRequest) =>
      api.post<SubjectAddResponse>('/api/subjects', request),
  });
};

export default useAddSubject;
