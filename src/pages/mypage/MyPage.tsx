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

const MyPage = () => {
  const { data } = useFetchProfile();

  const years = Array.from({ length: 12 }, () => 0);
  const months = Array.from({ length: 30 }, () => 0);

  return (
    <div className="flex flex-col">
      <Navigation
        title="마이페이지"
        left={<BackButton />}
        right={
          <Link to={''}>
            <Icon icon={faPen} size={20} />
          </Link>
        }
      />

      <div className="mx-[24px] mt-[24px]">
        <div className="flex flex-col gap-[7px]">
          <span className="text-heading-sm">아이디</span>
          {data?.username}
        </div>
        <div className="mt-[20px] flex flex-col gap-[7px]">
          <span className="text-heading-sm">이름</span>
          {data?.name}
        </div>
      </div>

      <div className="mx-[24px] mt-[30px]">
        <div className="flex items-center">
          <Icon
            icon={faAngleLeft}
            size={16}
            className="cursor-pointer text-highlight-1"
          />
          <span className="mx-[8px]">2024</span>
          <Icon
            icon={faAngleRight}
            size={16}
            className="cursor-pointer text-highlight-1"
          />
          <span className="ml-[14px]">복습 그래프</span>
        </div>

        <div className="mt-[10px] grid grid-cols-3 gap-[24px] rounded-[8px] border border-neutral-light-3 p-[8px]">
          {years.map((x, index) => (
            <div className="flex flex-col">
              <span className="text-heading-sm">{index + 1}월</span>
              <div className="mt-[8px] inline-grid grid-cols-6 gap-[4px]">
                {months.map((h) => (
                  <div
                    className={`size-[12px] rounded-[4px] ${convertHistoryToColor(h)}`}
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
