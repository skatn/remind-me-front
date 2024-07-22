import Navigation from '../../components/navigation/Navigation';
import BackButton from '../../components/navigation/BackButton';
import Toggle from '../../components/input/toggle/Toggle';
import Icon from '../../components/icon/Icon';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import Divider from '../../components/divider/Divider';
import QuestionManageListItem from '../../components/question/QuestionManageListItem';
import { useNavigate, useParams } from 'react-router-dom';
import useUpdateNotification from '../../hooks/subject/useUpdateNotification';
import useDeleteSubject from '../../hooks/subject/useDeleteSubject';
import { useState } from 'react';
import SimpleModal from '../../components/modal/SimpleModal';

const SubjectManagePage = () => {
  const { subjectId } = useParams();
  const navigate = useNavigate();
  const {
    params,
    setParams,
    mutate: updateMutate,
  } = useUpdateNotification(Number(subjectId));
  const { mutate: deleteMutate } = useDeleteSubject(Number(subjectId));
  const [isSubjectDeleteModalOpen, setIsSubjectDeleteModalOpen] =
    useState<boolean>(false);

  const handleChangeNotification = (enable: boolean) => {
    setParams({ enable });
    updateMutate({ enable });
  };

  const handleDelete = () => {
    deleteMutate(undefined, {
      onSuccess: () => {
        navigate('/subjects', { replace: true });
      },
    });
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
              <QuestionManageListItem
                index={1}
                question="문제 문제 문제"
                onClickEdit={() => {}}
                onClickDelete={() => {}}
              />
              <Divider />
              <QuestionManageListItem
                index={2}
                question="문제 문제 문제"
                onClickEdit={() => {}}
                onClickDelete={() => {}}
              />
              <Divider />
              <QuestionManageListItem
                index={3}
                question="문제 문제 문제"
                onClickEdit={() => {}}
                onClickDelete={() => {}}
              />
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
            handleDelete();
            setIsSubjectDeleteModalOpen(false);
          }}
        />
      )}
    </>
  );
};

export default SubjectManagePage;
