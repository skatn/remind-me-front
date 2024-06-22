import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import Icon from '../icon/Icon';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button type="button" onClick={() => navigate(-1)}>
      <Icon icon={faAngleLeft} size={22} />
    </button>
  );
};

export default BackButton;
