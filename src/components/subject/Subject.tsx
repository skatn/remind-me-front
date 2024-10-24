import { Subject as SubjectType } from '../../types/subject';
import Icon from '../icon/Icon';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import useRemindMeNavigate from '../../hooks/navigation/useRemindMeNavigate';

interface SubjectProps {
  subject: SubjectType;
  className?: string;
  enableEdit?: boolean;
}

const Subject = ({ subject, className, enableEdit }: SubjectProps) => {
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

      {enableEdit && (
        <button
          className="absolute end-[11px] top-[8px] size-[16px]"
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/subjects/${subject.id}/edit`);
          }}
        >
          <Icon icon={faPen} />
        </button>
      )}
    </div>
  );
};

export default Subject;
