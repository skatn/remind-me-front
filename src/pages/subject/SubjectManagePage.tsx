import Navigation from '../../components/navigation/Navigation';
import BackButton from '../../components/navigation/BackButton';
import Toggle from '../../components/input/toggle/Toggle';
import Icon from '../../components/icon/Icon';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import Divider from '../../components/divider/Divider';
import QuestionManageListItem from '../../components/question/QuestionManageListItem';
import { useParams } from 'react-router-dom';
import useUpdateNotification from '../../hooks/subject/useUpdateNotification';
import useDeleteSubject from '../../hooks/subject/useDeleteSubject';
import React, { useState } from 'react';
import SimpleModal from '../../components/modal/SimpleModal';
import useDeleteQuestion from '../../hooks/question/useDeleteQuestion';
import useFetchQuestionList from '../../hooks/question/useFetchQuestionList';
import useRemindMeNavigate from '../../hooks/navigation/useRemindMeNavigate';

const SubjectManagePage = () => {
  const { subjectId } = useParams();
  const { navigate } = useRemindMeNavigate();
  const {
    params,
    setParams,
    mutate: updateMutate,
  } = useUpdateNotification(Number(subjectId));
  const { mutate: deleteMutate } = useDeleteSubject();
  const { mutate: questionDeleteMutate } = useDeleteQuestion();
  const { ref, content } = useFetchQuestionList({
    subjectId: Number(subjectId),
    size: 10,
  });

  const [isSubjectDeleteModalOpen, setIsSubjectDeleteModalOpen] =
    useState<boolean>(false);
  const [questionDeleteModalState, setQuestionDeleteModalState] = useState<any>(
    {
      isOpen: false,
      questionId: 0,
    },
  );

  const handleChangeNotification = (enable: boolean) => {
    setParams({ enable });
    updateMutate({ enable });
  };

  return (
    <>
      <div className="flex flex-col">
        <Navigation title="문제집 관리" left={<BackButton />} />
        <div className="flex flex-col gap-[10px] p-[24px]">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <span className="text-body-md">Push 알림</span>
              <span className="text-body-xs text-neutral-dark-5">
                off시 해당 문제집에 수록된 문제들의 알림을 받지 않습니다.
              </span>
            </div>
            <Toggle
              checked={params.enable}
              onChange={handleChangeNotification}
            />
          </div>

          <Divider />

          <div className="flex justify-between">
            <span className="text-body-md text-support-error-1">
              문제집 삭제
            </span>
            <Icon
              icon={faTrash}
              className="cursor-pointer text-support-error-1"
              onClick={() => setIsSubjectDeleteModalOpen(true)}
            />
          </div>

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
        </div>
      </div>

      {isSubjectDeleteModalOpen && (
        <SimpleModal
          title="문제집 삭제"
          desc="정말 삭제 하시겠습니까?"
          leftBtnTxt="취소"
          rightBtnTxt="삭제"
          onClickLeftBtn={() => setIsSubjectDeleteModalOpen(false)}
          onClickRightBtn={() => {
            deleteMutate(Number(subjectId), {
              onSuccess: () => {
                navigate('/subjects', { replace: true });
              },
            });
            setIsSubjectDeleteModalOpen(false);
          }}
        />
      )}

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

export default SubjectManagePage;
