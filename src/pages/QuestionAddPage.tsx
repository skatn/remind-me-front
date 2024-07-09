import Navigation from '../components/navigation/Navigation';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import BackButton from '../components/navigation/BackButton';
import useAddQuestion from '../hooks/question/useAddQuestion';
import { useCallback, useContext, useState } from 'react';
import { Answer, QuestionAddRequest, QuestionType } from '../types/question';
import QuillEditor from '../components/editor/QuillEditor';
import Icon from '../components/icon/Icon';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import QuestionChoiceInput from '../components/question/QuestionChoiceInput';
import OutlineButton from '../components/input/button/OutlineButton';
import Button from '../components/input/button/Button';
import MultiLineInput from '../components/input/text/MultiLineInput';
import useInvalid from '../hooks/valid/useInvalid';
import { ToastContext } from '../contexts/ToastContext';

const QuestionAddPage = () => {
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();
  const { mutate } = useAddQuestion();
  const { invalidField, check } = useInvalid({
    question: [],
    questionType: [],
    'answers[].answer': [],
    explanation: [],
  });
  const { addToast } = useContext(ToastContext);
  const [param, setParam] = useState<QuestionAddRequest>({
    subjectId: Number(params.subjectId),
    question: '',
    questionType: 'CHOICE',
    answers: [{ answer: '', isAnswer: true }],
    explanation: '',
  });

  const handleChangeQuestion = (question: string) => {
    setParam((prev) => ({ ...prev, question }));
  };

  const handleChangeAnswer = useCallback((answers: Answer[]) => {
    setParam((prev) => ({ ...prev, answers }));
  }, []);

  const handleChangeExplanation = (explanation: string) => {
    setParam((prev) => ({ ...prev, explanation }));
  };

  const handleChangeQuestionType = (e: React.ChangeEvent<HTMLInputElement>) => {
    const questionType = e.currentTarget.value as QuestionType;
    setParam((prev) => ({
      ...prev,
      answers: [{ answer: '', isAnswer: true }],
      questionType,
    }));
  };

  const handleSubmit = () => {
    mutate(param, {
      onSuccess: () => {
        navigate(-1);
      },
      onError: (error) => {
        const errors = check(error);
        console.log(errors);
        errors?.globalErrors.forEach((e) =>
          addToast({ type: 'error', title: '문제 추가 실패', description: e }),
        );
      },
    });
  };

  return (
    <div className="flex flex-col">
      <Navigation title={location.state?.subject.title} left={<BackButton />} />
      <div className="p-[24px]">
        <h1 className="text-heading-md">답변 형식</h1>
        <div className="mt-[8px] flex items-center">
          <input
            type="radio"
            id="choice"
            name="questionType"
            className="input-radio me-[10px]"
            value="CHOICE"
            onChange={handleChangeQuestionType}
            checked={param.questionType === 'CHOICE'}
          />
          <label htmlFor="choice" className="text-body-md">
            객관식
          </label>
          <input
            type="radio"
            id="descriptive"
            name="questionType"
            className="input-radio me-[10px] ms-[28px]"
            value="DESCRIPTIVE"
            onChange={handleChangeQuestionType}
            checked={param.questionType === 'DESCRIPTIVE'}
          />
          <label htmlFor="descriptive" className="text-body-md">
            서술형
          </label>
        </div>
        {invalidField.questionType.length > 0 && (
          <p className="text-body-sm mt-[8px] text-support-error-1">
            {invalidField.questionType.join('\n')}
          </p>
        )}

        <h1 className="text-heading-md mb-[8px] mt-[40px]">질문</h1>
        <QuillEditor onChange={handleChangeQuestion} />
        {invalidField.question.length > 0 && (
          <p className="text-body-sm mt-[8px] text-support-error-1">
            {invalidField.question.join('\n')}
          </p>
        )}

        <h1 className="text-heading-md mb-[8px] mt-[40px]">
          답변
          {param.questionType === 'CHOICE' && (
            <div className="ms-[14px] inline-flex items-center gap-[3px]">
              <Icon
                icon={faInfoCircle}
                size={12}
                className="text-neutral-dark-5"
              />
              <span className="text-body-sm text-neutral-dark-5">
                답변은 3 ~ 5개 까지 작성할 수 있습니다.
              </span>
            </div>
          )}
        </h1>
        {param.questionType === 'CHOICE' && (
          <QuestionChoiceInput onChange={handleChangeAnswer} />
        )}
        {param.questionType === 'DESCRIPTIVE' && (
          <MultiLineInput
            name="answer"
            value={param.answers[0].answer}
            onChange={(value) =>
              handleChangeAnswer([{ answer: value, isAnswer: true }])
            }
            className="w-full"
          />
        )}

        {invalidField['answers[].answer'].length > 0 && (
          <p className="text-body-sm mt-[8px] text-support-error-1">
            {invalidField['answers[].answer'].join('\n')}
          </p>
        )}

        <h1 className="text-heading-md mb-[8px] mt-[40px]">풀이</h1>
        <QuillEditor onChange={handleChangeExplanation} />
        {invalidField.explanation.length > 0 && (
          <p className="text-body-sm mt-[8px] text-support-error-1">
            {invalidField.explanation.join('\n')}
          </p>
        )}

        <div className="mt-[40px] flex justify-end gap-[10px]">
          <OutlineButton className="text-neutral-dark-5">취소</OutlineButton>
          <OutlineButton>임시 저장</OutlineButton>
          <Button onClick={handleSubmit}>저장</Button>
        </div>
      </div>
    </div>
  );
};

export default QuestionAddPage;
