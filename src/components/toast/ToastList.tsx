import React from 'react';

interface ToastListProps {
  children: React.ReactNode;
}

const ToastList = ({ children }: ToastListProps) => {
  return (
    <div className="container mx-auto flex max-w-screen-md flex-col gap-2 px-[24px]">
      {children}
    </div>
  );
};

export default ToastList;
