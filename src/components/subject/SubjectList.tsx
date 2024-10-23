import Subject from './Subject';
import HorizontalList from '../list/HorizontalList';
import useRemindMeNavigate from '../../hooks/navigation/useRemindMeNavigate';
import useFetchSubjectList from '../../hooks/subject/useFetchSubjectList';
import { ErrorBoundary } from 'react-error-boundary';
import SubjectListFallback from './SubjectListFallback';
import { Suspense } from 'react';
import SubjectListSkeleton from './SubjectListSkeleton';

const SubjectList = () => {
  const { navigate } = useRemindMeNavigate();

  return (
    <HorizontalList
      title="문제집"
      className="mt-[24px]"
      action={() => {
        navigate('/subjects');
      }}
      actionText="더보기"
    >
      <ErrorBoundary fallback={<SubjectListFallback />}>
        <Suspense fallback={<SubjectListSkeleton />}>
          <Subjects />
        </Suspense>
      </ErrorBoundary>
    </HorizontalList>
  );
};

const Subjects = () => {
  const { content: subjects } = useFetchSubjectList({ size: 10 });

  return (
    <>
      {subjects?.length === 0 && (
        <div
          className={`relative flex aspect-square h-[110px] w-full flex-shrink-0 select-none items-center justify-center rounded-[8px] bg-neutral-light-4 p-[8px] hover:cursor-pointer`}
        >
          등록된 문제집이 없어요
        </div>
      )}
      {subjects?.map((subject) => (
        <Subject
          key={subject.id}
          subject={subject}
          className="size-[110px] flex-shrink-0"
        />
      ))}
    </>
  );
};

export default SubjectList;
