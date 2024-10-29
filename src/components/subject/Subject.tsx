import { Subject as SubjectType } from '../../types/subject';
import useRemindMeNavigate from '../../hooks/navigation/useRemindMeNavigate';

interface SubjectProps {
  subject: SubjectType;
  className?: string;
}

const Subject = ({ subject, className }: SubjectProps) => {
  const { navigate } = useRemindMeNavigate();

  return (
    <div
      className={`relative flex aspect-square select-none items-center justify-center rounded-[8px] p-[8px] hover:cursor-pointer ${className}`}
      style={{ background: `#${subject.color}` }}
      onClick={() =>
        navigate(`/subjects/${subject.id}`, { state: { subject: subject } })
      }
    >
      <span className="text-heading-sm">{subject.title}</span>
      <div className="text-body-sm absolute bottom-[8px] end-[11px] start-[11px] flex justify-between text-neutral-dark-5">
        <span>{subject.author.name}</span>
        <span>{subject.questionCount} 문제</span>
      </div>
    </div>
  );
};

export default Subject;
