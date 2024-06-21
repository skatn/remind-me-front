import React from 'react';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Icon from '../icon/Icon';

interface HorizontalListProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  action?: () => void;
  actionText?: string;
}

const HorizontalList = ({
  title,
  children,
  className,
  action,
  actionText,
}: HorizontalListProps) => {
  return (
    <div className={className}>
      <div className="flex items-center justify-between px-[24px]">
        <span className="text-heading-sm">{title}</span>
        {action && (
          <button
            className="inline-flex items-center gap-[2px] text-highlight-1"
            onClick={action}
          >
            <span className="text-body-md">{actionText}</span>
            <Icon icon={faAngleRight} size={14} />
          </button>
        )}
      </div>
      <div className="scrollbar-hide mt-[8px] flex w-full gap-[10px] overflow-x-scroll px-[24px]">
        {children}
      </div>
    </div>
  );
};

export default HorizontalList;
