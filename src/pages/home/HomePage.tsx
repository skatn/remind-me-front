import Navigation from '../../components/navigation/Navigation';
import MenuButton from '../../components/navigation/MenuButton';
import Banner from '../../components/banner/Banner';
import { getFcmToken } from '../../firebase/firebase';
import { useContext, useEffect } from 'react';
import { api } from '../../configs/AxiosConfig';
import { ToastContext } from '../../contexts/ToastContext';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import RecentlyUsedSubjectList from '../../components/subject/RecentlyUsedSubjectList';
import SubjectList from '../../components/subject/SubjectList';

const HomePage = () => {
  const { authentication } = useContext(AuthenticationContext);
  const { addToast } = useContext(ToastContext);

  useEffect(() => {
    getFcmToken()
      .then((token) => {
        api.post('/api/fcm/tokens', {
          token,
          refreshToken: authentication.refreshToken,
        });
      })
      .catch((error) => {
        if (error.message !== 'notification permission denied') {
          addToast({
            type: 'error',
            title: 'Push 알림 설정 에러',
            description:
              'Push 알림 관련 설정 중 예기치 못한 에러가 발생했습니다.',
          });
        }
      });
  }, [addToast]);

  return (
    <div className="flex flex-col">
      <Navigation title="Remind me" right={<MenuButton />} />
      <Banner />
      <RecentlyUsedSubjectList />
      <SubjectList />
    </div>
  );
};

export default HomePage;
