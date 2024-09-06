import Navigation from '../../components/navigation/Navigation';
import BackButton from '../../components/navigation/BackButton';
import { Link } from 'react-router-dom';
import Icon from '../../components/icon/Icon';
import {
  faAngleLeft,
  faAngleRight,
  faPen,
} from '@fortawesome/free-solid-svg-icons';
import { convertHistoryToColor } from '../../utils/utils';
import useFetchProfile from '../../hooks/member/useFetchProfile';
import { useState } from 'react';
import useFetchYearsHistories from '../../hooks/question/useFetchYearsHistories';

const MyPage = () => {
  const { data: profile } = useFetchProfile();
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const { data: histories } = useFetchYearsHistories(year);

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

      <div className="mx-[24px] my-[30px]">
        <div className="flex items-center">
          <Icon
            icon={faAngleLeft}
            size={16}
            className="cursor-pointer text-highlight-1"
            onClick={() => setYear((prev) => prev - 1)}
          />
          <span className="mx-[8px]">{year}</span>
          <Icon
            icon={faAngleRight}
            size={16}
            className="cursor-pointer text-highlight-1"
            onClick={() => setYear((prev) => prev + 1)}
          />
          <span className="ml-[14px]">복습 그래프</span>
        </div>

        <div className="mt-[10px] grid grid-cols-3 gap-[24px] rounded-[8px] border border-neutral-light-3 p-[8px] sm:grid-cols-4 md:grid-cols-5">
          {histories &&
            Object.keys(histories).map((key, index) => (
              <div className="flex flex-col">
                <span className="text-heading-sm">{index + 1}월</span>
                <div className="mt-[8px] inline-grid grid-cols-6 gap-[4px]">
                  {histories[key].map((h) => (
                    <div
                      className={`aspect-square w-full rounded-[4px] ${convertHistoryToColor(h.count)}`}
                    ></div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MyPage;
