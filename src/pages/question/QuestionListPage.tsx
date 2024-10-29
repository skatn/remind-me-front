import Navigation from '../../components/navigation/Navigation';
import BackButton from '../../components/navigation/BackButton';
import { Link, useLocation, useParams } from 'react-router-dom';
import Icon from '../../components/icon/Icon';
import { faGear, faPen, faPlus } from '@fortawesome/free-solid-svg-icons';
import QuestionList from '../../components/question/QuestionList';
import { ErrorBoundary } from 'react-error-boundary';
import React, { Suspense, useState } from 'react';
import QuestionListFallback from '../../components/question/QuestionListFallback';
import QuestionListSkeleton from '../../components/question/QuestionListSkeleton';
import useDropdown from '../../hooks/dropdown/useDropdown';
import SimpleModal from '../../components/modal/SimpleModal';
import useDeleteSubject from '../../hooks/subject/useDeleteSubject';
import useRemindMeNavigate from '../../hooks/navigation/useRemindMeNavigate';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';

const QuestionListPage = () => {
  const location = useLocation();
  const { subjectId } = useParams();
  const { ref, isOpen, toggleDropdown } = useDropdown<HTMLDivElement>();

  const { navigate } = useRemindMeNavigate();
  const { mutate: deleteMutate } = useDeleteSubject();
  const [isSubjectDeleteModalOpen, setIsSubjectDeleteModalOpen] =
    useState<boolean>(false);

  return (
    <>
      <div className="flex flex-col">
        <Navigation
          title={location.state?.subject.title}
          left={<BackButton />}
          right={
            <div className="relative cursor-pointer" ref={ref}>
              <Icon icon={faGear} size={22} onClick={toggleDropdown} />
              {isOpen && (
                <ul className="absolute end-0 flex w-32 flex-col gap-[10px] border-[1px] border-neutral-light-3 bg-neutral-light-5 p-4 shadow-md">
                  <li>
                    <Link
                      to={`/subjects/${subjectId}/edit`}
                      className="flex items-center gap-[6px]"
                    >
                      <Icon icon={faPen} size={12} />
                      <span>문제집 수정</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`/subjects/${subjectId}/manage`}
                      className="flex items-center gap-[6px]"
                    >
                      <Icon icon={faGear} size={12} />
                      <span>문제 관리</span>
                    </Link>
                  </li>
                  <li onClick={() => setIsSubjectDeleteModalOpen(true)}>
                    <Link
                      to={`/subjects/${subjectId}/manage`}
                      className="flex items-center gap-[6px]"
                    >
                      <Icon icon={faTrash} size={12} />
                      <span>문제집 삭제</span>
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          }
        />

        <ErrorBoundary fallback={<QuestionListFallback />}>
          <Suspense fallback={<QuestionListSkeleton />}>
            <QuestionList subjectId={Number(subjectId)} />
          </Suspense>
        </ErrorBoundary>

        <Link
          to={`/subjects/${subjectId}/questions/add`}
          state={{ subject: location.state?.subject }}
          className="fixed bottom-[24px] right-[24px] flex size-[50px] items-center justify-center rounded-full bg-highlight-1 p-0"
        >
          <Icon icon={faPlus} className="text-neutral-light-5" size={22} />
        </Link>
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
    </>
  );
};

export default QuestionListPage;
