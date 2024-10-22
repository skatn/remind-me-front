import Icon from '../icon/Icon';
import { faFileLines } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import Question from './Question';
import useFetchQuestionList from '../../hooks/question/useFetchQuestionList';

interface QuestionListProps {
  subjectId: number;
}

const QuestionList = ({ subjectId }: QuestionListProps) => {
  const { content, ref } = useFetchQuestionList({
    size: 10,
    subjectId: subjectId,
  });

  return (
    <>
      {content.length === 0 && (
        <div className="flex flex-col items-center gap-4 py-[40px] text-neutral-dark-5">
          <Icon icon={faFileLines} size={40} className="text-neutral-dark-5" />
          <span className="text-heading-lg">등록된 문제가 없어요</span>
        </div>
      )}

      <div className="flex flex-col gap-[10px] p-[24px]">
        {content.map((question, index) => (
          <Link
            key={question.id}
            to={`/subjects/${subjectId}/questions/${question.id}`}
          >
            <Question question={question} index={index} />
          </Link>
        ))}
      </div>

      <div ref={ref}></div>
    </>
  );
};

export default QuestionList;
