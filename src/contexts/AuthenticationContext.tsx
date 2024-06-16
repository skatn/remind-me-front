import React, { createContext, useEffect, useState } from 'react';
import { Authentication } from '../types/auth';

interface AuthenticationContextProviderProps {
  children: React.ReactNode;
}

interface AuthenticationContextType {
  authentication: Authentication;
  setAuthentication: (authentication: Authentication) => void;
  clearAuthentication: () => void;
}

const defaultAuthentication = {
  isAuthenticated: false,
  id: 0,
  accessToken: '',
  refreshToken: '',
};

const authenticationKey = 'authentication';

const getAuthenticationFromLocalStorage = (): Authentication => {
  const authentication = localStorage.getItem(authenticationKey);
  return authentication
    ? JSON.parse(authentication)
    : { ...defaultAuthentication };
};

const saveAuthenticationToLocalStorage = (authentication: Authentication) => {
  localStorage.setItem(authenticationKey, JSON.stringify(authentication));
};

export const AuthenticationContext = createContext<AuthenticationContextType>({
  authentication: { ...defaultAuthentication },
  setAuthentication: () => {},
  clearAuthentication: () => {},
});

export const AuthenticationContextProvider = ({
  children,
}: AuthenticationContextProviderProps) => {
  const [authentication, setAuthentication] = useState<Authentication>(
    getAuthenticationFromLocalStorage(),
  );

  useEffect(() => {
    saveAuthenticationToLocalStorage(authentication);
  }, [authentication]);

  const clearAuthentication = () => {
    setAuthentication({ ...defaultAuthentication });
  };

  return (
    <AuthenticationContext.Provider
      value={{ authentication, setAuthentication, clearAuthentication }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
