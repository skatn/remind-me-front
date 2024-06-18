import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import Icon from '../icon/Icon';

const BackButton = () => {
  return (
    <button>
      <Icon icon={faAngleLeft} size={22} />
    </button>
  );
};

export default BackButton;
