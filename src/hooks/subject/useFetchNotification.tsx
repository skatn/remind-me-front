import { useQuery } from '@tanstack/react-query';
import { api } from '../../configs/AxiosConfig';
import { NotificationGetResponse } from '../../types/subject';
import subjectKeys from './subjectKeys';

const useFetchNotification = (subjectId: number) => {
  return useQuery({
    queryKey: subjectKeys.notification(subjectId),
    queryFn: async () => {
      const response = await api.get<NotificationGetResponse>(
        `/api/subjects/${subjectId}/notification`,
      );
      return response.data;
    },
  });
};

export default useFetchNotification;
