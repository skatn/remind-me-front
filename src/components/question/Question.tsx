import Icon from '../icon/Icon';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Question as QuestionType } from '../../types/question';

interface QuestionProps {
  question: QuestionType;
}

const Question = ({ question }: QuestionProps) => {
  return (
    <div className="flex items-center gap-[16px] rounded-[16px] bg-neutral-light-4 p-[16px]">
      <div className="inline-flex grow flex-col gap-[4px]">
        <span className="text-heading-md">{question.question}</span>
        <span className="text-body-sm text-neutral-dark-4">
          {question.questionType === 'CHOICE' ? '객관식' : '서술형'}
        </span>
      </div>
      <Icon icon={faAngleRight} className="text-neutral-dark-5" size={16} />
    </div>
  );
};

export default Question;
