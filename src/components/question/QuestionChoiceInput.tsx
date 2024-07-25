import Input from '../input/text/Input';
import Icon from '../icon/Icon';
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import OutlineButton from '../input/button/OutlineButton';
import { useContext, useEffect, useState } from 'react';
import { Answer } from '../../types/question';
import { ToastContext } from '../../contexts/ToastContext';

interface QuestionChoiceInputProps {
  onChange?: (answers: Answer[]) => void;
  initialValue?: Answer[];
}

const QuestionChoiceInput = ({
  onChange,
  initialValue,
}: QuestionChoiceInputProps) => {
  const { addToast } = useContext(ToastContext);
  const [answers, setAnswers] = useState<Answer[]>(
    initialValue || [
      { answer: '', isAnswer: false },
      { answer: '', isAnswer: false },
      { answer: '', isAnswer: false },
    ],
  );

  useEffect(() => {
    if (onChange) {
      onChange(answers);
    }
  }, [answers, onChange]);

  const handleAddAnswer = () => {
    if (answers.length === 5) {
      addToast({
        type: 'info',
        title: '답변 추가 실패',
        description: '답변은 최대 5개 까지 작성할 수 있습니다.',
      });
      return;
    }
    setAnswers((prev) => [...prev, { answer: '', isAnswer: false }]);
  };

  const handleDeleteAnswer = (index: number) => {
    if (answers.length === 3) {
      addToast({
        type: 'info',
        title: '답변 삭제 실패',
        description: '답변은 최소 3개 있어야 합니다.',
      });
      return;
    }
    setAnswers((prev) => prev.filter((answer, idx) => idx !== index));
  };

  const handleChangeAnswer = (value: string, index: number) => {
    setAnswers((prev) => {
      const newAnswer = [...prev];
      newAnswer[index].answer = value;
      return newAnswer;
    });
  };

  const handleChangeIsAnswer = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentIndex = Number(e.currentTarget.value);
    setAnswers((prev) =>
      prev.map((answer, index) => {
        return { ...answer, isAnswer: currentIndex === index };
      }),
    );
  };

  return (
    <div className="flex flex-col gap-[10px]">
      {answers.map((answer, index) => (
        <div key={index} className="flex items-center gap-[13px]">
          <input
            type="radio"
            name="answer-radio"
            className="input-radio"
            value={index}
            checked={answer.isAnswer}
            onChange={handleChangeIsAnswer}
          />
          <Input
            name="answer"
            className="grow"
            value={answers[index].answer}
            onChange={(value) => handleChangeAnswer(value, index)}
          />
          <Icon
            icon={faXmark}
            className="text-support-error-1 hover:cursor-pointer"
            onClick={() => handleDeleteAnswer(index)}
          />
        </div>
      ))}

      <OutlineButton
        leftIcon={faPlus}
        className="w-full"
        onClick={handleAddAnswer}
      >
        답변 추가
      </OutlineButton>
    </div>
  );
};

export default QuestionChoiceInput;
