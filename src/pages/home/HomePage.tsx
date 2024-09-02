import Navigation from '../../components/navigation/Navigation';
import MenuButton from '../../components/navigation/MenuButton';
import Banner from '../../components/banner/Banner';
import HorizontalList from '../../components/list/HorizontalList';
import Subject from '../../components/subject/Subject';
import useFetchSubjectList from '../../hooks/subject/useFetchSubjectList';
import { getFcmToken } from '../../firebase/firebase';
import { useContext, useEffect } from 'react';
import { api } from '../../configs/AxiosConfig';
import { ToastContext } from '../../contexts/ToastContext';
import useRemindMeNavigate from '../../hooks/navigation/useRemindMeNavigate';
import useFetchRecentSubjectList from '../../hooks/subject/useFetchRecentSubjectList';

const HomePage = () => {
  const { navigate } = useRemindMeNavigate();
  const { content: subjects } = useFetchSubjectList({ size: 10 });
  const { data: recentSubjects } = useFetchRecentSubjectList();
  const { addToast } = useContext(ToastContext);

  useEffect(() => {
    getFcmToken()
      .then((token) => {
        api.post('/api/fcm/tokens', { token });
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
      <HorizontalList title="최근 학습한 문제집" className="mt-[24px]">
        {recentSubjects?.length === 0 && (
          <div
            className={`relative flex aspect-square h-[110px] w-full flex-shrink-0 select-none items-center justify-center rounded-[8px] bg-neutral-light-4 p-[8px] hover:cursor-pointer`}
          >
            최근 학습한 문제집이 없어요
          </div>
        )}
        {recentSubjects?.map((subject) => (
          <Subject
            key={subject.id}
            subject={subject}
            className="size-[110px] flex-shrink-0"
          />
        ))}
      </HorizontalList>

      <HorizontalList
        title="문제집"
        className="mt-[24px]"
        action={() => {
          navigate('/subjects');
        }}
        actionText="더보기"
      >
        {subjects?.length === 0 && (
          <div
            className={`relative flex aspect-square h-[110px] w-full flex-shrink-0 select-none items-center justify-center rounded-[8px] bg-neutral-light-4 p-[8px] hover:cursor-pointer`}
          >
            등록된 문제집이 없어요
          </div>
        )}
        {subjects?.map((subject) => (
          <Subject
            key={subject.id}
            subject={subject}
            className="size-[110px] flex-shrink-0"
          />
        ))}
      </HorizontalList>
    </div>
  );
};

export default HomePage;
