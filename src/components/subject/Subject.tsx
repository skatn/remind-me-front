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
      <span className="text-body-sm absolute bottom-[8px] end-[11px] text-neutral-dark-5">
        {subject.questionCount} 문제
      </span>
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
