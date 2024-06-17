import React, { useContext, useEffect } from 'react';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import { useLocation, useNavigate } from 'react-router-dom';

interface PrivateRouteProps {
  children: React.ReactNode;
}

const Private = ({ children }: PrivateRouteProps) => {
  const navigate = useNavigate();
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
