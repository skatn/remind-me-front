import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

interface IconProps {
  icon: IconDefinition;
  size?: number;
}

const Icon = ({ icon, size = 24 }: IconProps) => {
  return (
    <div
      className={`inline-flex items-center justify-center`}
      style={{ width: size, height: size }}
    >
      <FontAwesomeIcon icon={icon} className="size-full text-highlight-1" />
    </div>
  );
};

export default Icon;
