import useFetchProfile from '../../hooks/member/useFetchProfile';
import QuestionSubmitHistory30Days from '../analyze/QuestionSubmitHistory30Days';
import { Suspense } from 'react';
import Loading from '../loading/Loading';

const Banner = () => {
  return (
    <div className="flex justify-between bg-neutral-light-4 p-[24px]">
      <Suspense fallback={<Loading />}>
        <UserInfo />
        <QuestionSubmitHistory30Days />
      </Suspense>
    </div>
  );
};

const UserInfo = () => {
  const { data: profile } = useFetchProfile();

  return <span className="text-heading-lg">{profile?.name} 님</span>;
};

export default Banner;
