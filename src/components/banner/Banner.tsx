import { convertHistoryToColor } from '../../utils/utils';
import useFetchProfile from '../../hooks/member/useFetchProfile';
import useFetchLast30DaysHistories from '../../hooks/question/useFetchLast30DaysHistories';

const Banner = () => {
  const { data: profile } = useFetchProfile();
  const { data: histories } = useFetchLast30DaysHistories();
  const defaultHistories = Array.from({ length: 30 }, () => 0);

  return (
    <div className="flex justify-between bg-neutral-light-4 p-[24px]">
      <span className="text-heading-lg">{profile?.name} 님</span>
      <div className="inline-grid grid-cols-6 gap-[4px]">
        {!histories &&
          defaultHistories.map((h, index) => (
            <div
              key={index}
              className={`size-[12px] rounded-[4px] ${convertHistoryToColor(h)}`}
            ></div>
          ))}

        {histories &&
          histories.map((h, index) => (
            <div
              key={index}
              className={`size-[12px] rounded-[4px] ${convertHistoryToColor(h.count)}`}
            ></div>
          ))}
      </div>
    </div>
  );
};

export default Banner;
