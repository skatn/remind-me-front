import Navigation from '../../components/navigation/Navigation';
import BackButton from '../../components/navigation/BackButton';
import { Link } from 'react-router-dom';
import Icon from '../../components/icon/Icon';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import useFetchProfile from '../../hooks/member/useFetchProfile';
import { Suspense } from 'react';
import QuestionSubmitHistoryYears from '../../components/analyze/QuestionSubmitHistoryYears';

const MyPage = () => {
  const { data: profile } = useFetchProfile();

  return (
    <div className="flex flex-col">
      <Navigation
        title="마이페이지"
        left={<BackButton />}
        right={
          <Link to="/mypage/edit">
            <Icon icon={faPen} size={20} />
          </Link>
        }
      />

      <div className="mx-[24px] mt-[24px]">
        <div className="flex flex-col gap-[7px]">
          <span className="text-heading-sm">이름</span>
          {profile?.name}
        </div>
      </div>

      <Suspense>
        <QuestionSubmitHistoryYears />
      </Suspense>
    </div>
  );
};

export default MyPage;
