import { SubjectType } from '../../types/subjectType';
import { useNavigate } from 'react-router-dom';
import Icon from '../icon/Icon';
import { faPen } from '@fortawesome/free-solid-svg-icons';

interface SubjectProps {
  subject: SubjectType;
  className?: string;
  enableEdit?: boolean;
}

const Subject = ({ subject, className, enableEdit }: SubjectProps) => {
  const navigate = useNavigate();

  return (
    <div
      className={`relative flex aspect-square select-none items-center justify-center rounded-[8px] p-[8px] hover:cursor-pointer ${className}`}
      style={{ background: `#${subject.color}` }}
      onClick={() => navigate(`/subjects/${subject.id}`)}
    >
      <span className="text-heading-sm">{subject.title}</span>
      <span className="text-body-sm absolute bottom-[8px] end-[11px] text-neutral-dark-5">
        {subject.questionCount} 문제
      </span>
      {enableEdit && (
        <button className="absolute end-[11px] top-[8px] size-[16px]">
          <Icon icon={faPen} />
        </button>
      )}
    </div>
  );
};

export default Subject;
