import { useEffect } from 'react';

export interface ModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center whitespace-pre-wrap bg-neutral-dark-1 bg-opacity-[85%]">
      <div className="m-[45px] flex min-w-[300px] flex-col items-center rounded-[14px] bg-neutral-light-5 p-[16px]">
        {children}
      </div>
    </div>
  );
};

export default Modal;
