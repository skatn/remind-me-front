import { useNavigate } from 'react-router-dom';
import { To } from '@remix-run/router';
import { NavigateOptions } from 'react-router/dist/lib/context';

const useRemindMeNavigate = () => {
  const nav = useNavigate();

  const back = () => {
    if (window.history.state.idx === 0) {
      nav('/');
    } else {
      nav(-1);
    }
  };

  const navigate = (to: To, options?: NavigateOptions) => {
    nav(to, options);
  };

  return { back, navigate };
};

export default useRemindMeNavigate;
