import Navigation from '../../components/navigation/Navigation';
import BackButton from '../../components/navigation/BackButton';
import Divider from '../../components/divider/Divider';
import QuestionManageListItem from '../../components/question/QuestionManageListItem';
import { useParams } from 'react-router-dom';
import React, { Suspense, useState } from 'react';
import SimpleModal from '../../components/modal/SimpleModal';
import useDeleteQuestion from '../../hooks/question/useDeleteQuestion';
import useFetchQuestionList from '../../hooks/question/useFetchQuestionList';
import useRemindMeNavigate from '../../hooks/navigation/useRemindMeNavigate';
import Loading from '../../components/loading/Loading';

const QuestionManagePage = () => {
  const { subjectId } = useParams();

  return (
    <div className="flex flex-col">
      <Navigation title="문제 관리" left={<BackButton />} />

      <Suspense fallback={<Loading />}>
        <Questions subjectId={Number(subjectId)} />
      </Suspense>
    </div>
  );
};

interface QuestionsProps {
  subjectId: number;
}
const Questions = ({ subjectId }: QuestionsProps) => {
  const { navigate } = useRemindMeNavigate();
  const { ref, content } = useFetchQuestionList({
    subjectId: Number(subjectId),
    size: 10,
  });
  const { mutate: questionDeleteMutate } = useDeleteQuestion();
  const [questionDeleteModalState, setQuestionDeleteModalState] = useState<any>(
    {
      isOpen: false,
      questionId: 0,
    },
  );

  return (
    <>
      <div className="mt-[40px]">
        <div className="mt-[14px] flex flex-col gap-[8px]">
          {content?.map((question, index) => (
            <React.Fragment key={question.id}>
              <QuestionManageListItem
                index={index + 1}
                question={question.question}
                onClickEdit={() => {
                  navigate(
                    `/subjects/${subjectId}/questions/${question.id}/edit`,
                  );
                }}
                onClickDelete={() => {
                  setQuestionDeleteModalState({
                    isOpen: true,
                    questionId: question.id,
                  });
                }}
              />
              {index < content?.length - 1 && <Divider />}
            </React.Fragment>
          ))}
          <div ref={ref}></div>
        </div>
      </div>
      {questionDeleteModalState.isOpen && (
        <SimpleModal
          title="문제 삭제"
          desc="정말 삭제 하시겠습니까?"
          leftBtnTxt="취소"
          rightBtnTxt="삭제"
          onClickLeftBtn={() =>
            setQuestionDeleteModalState({
              isOpen: false,
              questionId: 0,
            })
          }
          onClickRightBtn={() => {
            questionDeleteMutate(questionDeleteModalState.questionId);
            setQuestionDeleteModalState({
              isOpen: false,
              questionId: 0,
            });
          }}
        />
      )}
    </>
  );
};

export default QuestionManagePage;
