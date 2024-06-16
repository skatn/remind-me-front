import React from 'react';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ButtonProps {
  children?: React.ReactNode;
  leftIcon?: IconDefinition;
  rightIcon?: IconDefinition;
  className?: string;
  type?: 'submit' | 'reset' | 'button' | undefined;
  onClick?: () => void;
}

const Button = ({
  children,
  leftIcon,
  rightIcon,
  className,
  type,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`btn-primary ${className}`}
      type={type}
      onClick={onClick}
    >
      {leftIcon && <FontAwesomeIcon icon={leftIcon} />}
      {children}
      {rightIcon && <FontAwesomeIcon icon={rightIcon} />}
    </button>
  );
};

export default Button;
