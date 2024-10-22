import HorizontalList from '../list/HorizontalList';
import Subject from './Subject';
import useFetchRecentSubjectList from '../../hooks/subject/useFetchRecentSubjectList';

const RecentlyUsedSubjectList = () => {
  const { data: recentSubjects } = useFetchRecentSubjectList();

  return (
    <HorizontalList title="최근 학습한 문제집" className="mt-[24px]">
      {recentSubjects?.length === 0 && (
        <div
          className={`relative flex aspect-square h-[110px] w-full flex-shrink-0 select-none items-center justify-center rounded-[8px] bg-neutral-light-4 p-[8px] hover:cursor-pointer`}
        >
          최근 학습한 문제집이 없어요
        </div>
      )}
      {recentSubjects?.map((subject) => (
        <Subject
          key={subject.id}
          subject={subject}
          className="size-[110px] flex-shrink-0"
        />
      ))}
    </HorizontalList>
  );
};

export default RecentlyUsedSubjectList;
