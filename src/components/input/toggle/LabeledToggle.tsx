import Toggle from './Toggle';
import React from 'react';

interface LabeledToggleProps {
  title: string;
  description: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const LabeledToggle = ({
  title,
  description,
  checked,
  onChange,
}: LabeledToggleProps) => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col">
        <span className="text-heading-md mb-[4px]">{title}</span>
        <span className="text-body-xs text-neutral-dark-5">{description}</span>
      </div>
      <Toggle checked={checked} onChange={onChange} />
    </div>
  );
};

export default LabeledToggle;
