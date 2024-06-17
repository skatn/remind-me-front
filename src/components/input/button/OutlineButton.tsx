import React from 'react';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface OutlineButtonProps {
  children?: React.ReactNode;
  leftIcon?: IconDefinition;
  rightIcon?: IconDefinition;
  className?: string;
  type?: 'submit' | 'reset' | 'button' | undefined;
  onClick?: () => void;
}

const OutlineButton = ({
  children,
  leftIcon,
  rightIcon,
  className,
  type,
  onClick,
}: OutlineButtonProps) => {
  return (
    <button
      className={`btn-outline-primary ${className}`}
      type={type}
      onClick={onClick}
    >
      {leftIcon && <FontAwesomeIcon icon={leftIcon} />}
      {children}
      {rightIcon && <FontAwesomeIcon icon={rightIcon} />}
    </button>
  );
};

export default OutlineButton;
