import Subject from './Subject';
import useFetchSubjectList from '../../hooks/subject/useFetchSubjectList';
import { SubjectListGetRequest } from '../../types/subject';

interface SubjectGridProps {
  request: SubjectListGetRequest;
}

const SubjectGrid = ({ request }: SubjectGridProps) => {
  const { content: subjects, ref } = useFetchSubjectList(request);

  return (
    <>
      <div className="mt-[24px] grid grid-cols-2 gap-[24px] px-[24px] md:grid-cols-4">
        {subjects.map((subject) => (
          <Subject key={subject.id} subject={subject} />
        ))}
        <div ref={ref}></div>
      </div>
    </>
  );
};

export default SubjectGrid;
