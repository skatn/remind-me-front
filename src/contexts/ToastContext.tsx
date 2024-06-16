import React, { createContext, useState } from 'react';
import { Toast as ToastType } from '../types/toast';
import { createPortal } from 'react-dom';
import Toast from '../components/toast/Toast';
import uuid from 'react-uuid';
import ToastList from '../components/toast/ToastList';

interface ToastContextType {
  addToast: (toast: ToastType) => void;
  removeToast: (id: string) => void;
}

interface ToastContextProviderProps {
  children: React.ReactNode;
}

export const ToastContext = createContext<ToastContextType>({
  addToast: (toast) => {},
  removeToast: (id) => {},
});

export const ToastContextProvider = ({
  children,
}: ToastContextProviderProps) => {
  const [toasts, setToasts] = useState<ToastType[]>([]);
  const addToast = (toast: ToastType) => {
    toast.id = uuid();
    setToasts((prev) => [...prev, toast]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      {createPortal(
        <ToastList>
          {toasts.map((toast, index) => (
            <Toast toast={toast} key={index} />
          ))}
        </ToastList>,
        document.getElementById('toast') as HTMLElement,
      )}
    </ToastContext.Provider>
  );
};
