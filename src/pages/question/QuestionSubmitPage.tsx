import Navigation from '../../components/navigation/Navigation';
import BackButton from '../../components/navigation/BackButton';
import MultiLineInput from '../../components/input/text/MultiLineInput';
import Button from '../../components/input/button/Button';
import Icon from '../../components/icon/Icon';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import useSubmitQuestion from '../../hooks/question/useSubmitQuestion';
import useFetchQuestion from '../../hooks/question/useFetchQuestion';
import { useState } from 'react';
import { QuestionSubmitRequest } from '../../types/question';
import useInvalid from '../../hooks/valid/useInvalid';
import useQuestionNavigation from '../../hooks/question/useQuestionNavigation';
import { concatHostUrl } from '../../utils/utils';
import SimpleModal from '../../components/modal/SimpleModal';
import useRemindMeNavigate from '../../hooks/navigation/useRemindMeNavigate';

const QuestionSubmitPage = () => {
  const { navigate } = useRemindMeNavigate();
  const params = useParams();
  const questionId = Number(params.questionId);
  const subjectId = Number(params.subjectId);
  const { data: question } = useFetchQuestion(questionId);
  const {
    goToNextQuestion,
    goToPrevQuestion,
    status: questionNavStatus,
  } = useQuestionNavigation(subjectId, questionId);
  const { mutate } = useSubmitQuestion();
  const [submitRequest, setSubmitRequest] = useState<QuestionSubmitRequest>({
    questionId: questionId,
    submittedAnswer: '',
  });
  const { invalidField, check, clear } = useInvalid({
    submittedAnswer: [],
  });
  const [modalState, setModalState] = useState<any>({
    isOpen: false,
    title: '',
    message: '',
  });

  const handleSubmit = () => {
    clear();
    mutate(submitRequest, {
      onSuccess: (response) => {
        if (response.data.correct) {
          setModalState({
            isOpen: true,
            title: '정답!',
            message:
              '문제를 맞히셨습니다. 축하드립니다!\n이 문제는 7일 뒤 알림이 발송됩니다.',
          });
        } else {
          setModalState({
            isOpen: true,
            title: '오답!!',
            message:
              '문제를 맞히지 못하셨습니다.\n이 문제는 7일 뒤 알림이 발송됩니다.',
          });
        }
      },
      onError: (error) => {
        check(error);
      },
    });
  };

  const closeModal = () => {
    setModalState((prev: any) => ({ ...prev, isOpen: false }));
  };

  return (
    <>
      <div className="flex flex-col">
        <Navigation title="asdf" left={<BackButton />} />
        <div className="p-[24px]">
          <div className="text-heading-md flex gap-[6px]">
            <span>{questionNavStatus.index + 1}.</span>
            <p>{question?.question}</p>
          </div>
          {question?.questionImage && (
            <img
              src={concatHostUrl(question?.questionImage)}
              alt="question"
              className="mt-[10px] aspect-video object-cover"
            />
          )}

          {question?.questionType === 'CHOICE' && (
            <div className="mt-[40px] flex flex-col gap-[10px]">
              {question?.answers.map((answer) => (
                <div key={answer.id} className="flex gap-[8px]">
                  <input
                    id={`answer-${answer.id}`}
                    type="radio"
                    className="input-radio mt-[4px] shrink-0"
                    name="answer"
                    value={answer.answer}
                    onChange={(e) => {
                      const submittedAnswer = e.currentTarget.value;
                      setSubmitRequest((prev) => ({
                        ...prev,
                        submittedAnswer,
                      }));
                    }}
                  />
                  <label htmlFor={`answer-${answer.id}`}>{answer.answer}</label>
                </div>
              ))}
            </div>
          )}
          {question?.questionType === 'CHOICE' &&
            invalidField.submittedAnswer.length > 0 && (
              <p className="text-body-sm mt-[8px] text-support-error-1">
                답변을 선택해 주세요.
              </p>
            )}

          {question?.questionType === 'DESCRIPTIVE' && (
            <MultiLineInput
              className="mt-[40px] w-full"
              value={submitRequest.submittedAnswer}
              onChange={(submittedAnswer) => {
                setSubmitRequest((prev) => ({ ...prev, submittedAnswer }));
              }}
            />
          )}
          {question?.questionType === 'DESCRIPTIVE' &&
            invalidField.submittedAnswer.length > 0 && (
              <p className="text-body-sm mt-[8px] text-support-error-1">
                {invalidField.submittedAnswer.join('\n')}
              </p>
            )}

          <Button className="mt-[20px] w-full" onClick={handleSubmit}>
            제출
          </Button>
          <div className="text-body-md mt-[30px] flex justify-between">
            <button
              className={`inline-flex items-center text-highlight-1 ${!questionNavStatus.hasPrev && 'invisible'}`}
              onClick={goToPrevQuestion}
            >
              <Icon icon={faAngleLeft} size={16} />
              이전 문제
            </button>

            <button
              className={`inline-flex items-center text-highlight-1 ${!questionNavStatus.hasNext && 'invisible'}`}
              onClick={goToNextQuestion}
            >
              다음 문제
              <Icon icon={faAngleRight} size={16} />
            </button>
          </div>
        </div>
      </div>

      {modalState.isOpen && (
        <SimpleModal
          title={modalState.title}
          desc={modalState.message}
          leftBtnTxt="풀이 보기"
          rightBtnTxt="확인"
          onClickLeftBtn={() => {
            navigate(
              `/subjects/${params.subjectId}/questions/${params.questionId}/explain`,
              {
                state: { explanation: question?.explanation },
              },
            );
          }}
          onClickRightBtn={closeModal}
        />
      )}
    </>
  );
};

export default QuestionSubmitPage;
