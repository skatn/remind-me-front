import React, { useContext, useEffect } from 'react';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import { useLocation } from 'react-router-dom';
import useRemindMeNavigate from '../../hooks/navigation/useRemindMeNavigate';

interface PrivateRouteProps {
  children: React.ReactNode;
}

const Private = ({ children }: PrivateRouteProps) => {
  const { navigate } = useRemindMeNavigate();
  const { pathname } = useLocation();
  const { authentication } = useContext(AuthenticationContext);

  useEffect(() => {
    if (!authentication.isAuthenticated) {
      navigate('/login', { replace: true, state: { redirect: pathname } });
    }
  }, [authentication, navigate, pathname]);

  return <>{children}</>;
};

export default Private;
