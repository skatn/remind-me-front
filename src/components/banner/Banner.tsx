import { convertHistoryToColor } from '../../utils/utils';

const Banner = () => {
  const histories = [];
  for (let i = 0; i < 30; i++) {
    histories.push(Math.floor(Math.random() * 5));
  }

  return (
    <div className="flex justify-between bg-neutral-light-4 p-[24px]">
      <span className="text-heading-lg">사용자 님</span>
      <div className="inline-grid grid-cols-6 gap-[4px]">
        {histories.map((h) => (
          <div
            className={`size-[12px] rounded-[4px] ${convertHistoryToColor(h)}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
