import { convertHistoryToColor } from '../../utils/utils';
import useFetchLast30DaysHistories from '../../hooks/question/useFetchLast30DaysHistories';

const QuestionSubmitHistory30Days = () => {
  const { data: histories } = useFetchLast30DaysHistories();
  const defaultHistories = Array.from({ length: 30 }, () => 0);

  return (
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
  );
};

export default QuestionSubmitHistory30Days;
