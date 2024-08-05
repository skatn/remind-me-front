import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import Icon from '../icon/Icon';
import useRemindMeNavigate from '../../hooks/navigation/useRemindMeNavigate';

const BackButton = () => {
  const { back } = useRemindMeNavigate();

  return (
    <button type="button" onClick={back}>
      <Icon icon={faAngleLeft} size={22} />
    </button>
  );
};

export default BackButton;
