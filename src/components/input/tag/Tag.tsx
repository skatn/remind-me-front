import Icon from '../../icon/Icon';
import { faX } from '@fortawesome/free-solid-svg-icons';

interface TagProps {
  text: string;
  showDeleteButton?: boolean;
  onClick?: () => void;
}

const Tag = ({ text, showDeleteButton, onClick }: TagProps) => {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-neutral-light-3 px-[12px] py-[4px] text-neutral-dark-3 ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      {text}
      {showDeleteButton && (
        <Icon icon={faX} className="ms-[8px] text-neutral-dark-3" size={8} />
      )}
    </span>
  );
};

export default Tag;
