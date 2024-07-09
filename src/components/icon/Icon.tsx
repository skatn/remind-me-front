import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

interface IconProps {
  icon: IconDefinition;
  size?: number;
  className?: string;
  onClick?: () => void;
}

const Icon = ({
  icon,
  size = 24,
  className = 'text-highlight-1',
  onClick,
}: IconProps) => {
  return (
    <div
      className={`inline-flex max-h-full max-w-full items-center justify-center ${className}`}
      style={{ width: size, height: size }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} className="size-full" />
    </div>
  );
};

export default Icon;
