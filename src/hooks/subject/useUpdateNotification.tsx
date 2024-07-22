import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../../configs/AxiosConfig';
import { NotificationUpdateRequest } from '../../types/subject';
import useFetchNotification from './useFetchNotification';
import { useEffect, useState } from 'react';
import subjectKeys from './subjectKeys';

const useUpdateNotification = (subjectId: number) => {
  const queryClient = useQueryClient();
  const [params, setParams] = useState<NotificationUpdateRequest>({
    enable: false,
  });

  const mutation = useMutation({
    mutationFn: (request: NotificationUpdateRequest) => {
      return api.patch(`/api/subjects/${subjectId}/notification`, request);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: subjectKeys.notification(subjectId),
      });
    },
  });

  const { data, isSuccess } = useFetchNotification(subjectId);
  useEffect(() => {
    if (isSuccess) {
      setParams({ enable: data.isEnable });
    }
  }, [data, isSuccess, setParams]);

  return { params, setParams, ...mutation };
};

export default useUpdateNotification;
