import React from 'react';

interface NavigationProps {
  title: string;
  right?: React.ReactNode;
  left?: React.ReactNode;
}

const Navigation = ({ right, title, left }: NavigationProps) => {
  return (
    <nav className="sticky top-0 z-10 flex h-[56px] w-full items-center border-b border-neutral-light-4 bg-neutral-light-5 px-[24px]">
      <div className="flex flex-1">{left}</div>
      <div className="text-center">
        <h1 className="text-heading-md">{title}</h1>
      </div>
      <div className="flex flex-1 justify-end">{right}</div>
    </nav>
  );
};

export default Navigation;
