import { SubjectType } from '../../types/subjectType';
import { useNavigate } from 'react-router-dom';

interface SubjectProps {
  subject: SubjectType;
}

const Subject = ({ subject }: SubjectProps) => {
  const navigate = useNavigate();

  return (
    <div
      className="relative flex size-[110px] min-h-[110px] min-w-[110px] select-none items-center justify-center rounded-[8px] p-[8px] hover:cursor-pointer"
      style={{ background: `#${subject.color}` }}
      onClick={() => navigate(`/subjects/${subject.id}`)}
    >
      <span className="text-heading-sm">{subject.title}</span>
      <span className="text-body-sm absolute bottom-[8px] end-[11px] text-neutral-dark-5">
        {subject.questionCount} 문제
      </span>
    </div>
  );
};

export default Subject;
