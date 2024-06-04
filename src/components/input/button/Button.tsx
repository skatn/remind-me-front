import React from 'react';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ButtonProps {
  children?: React.ReactNode;
  leftIcon?: IconDefinition;
  rightIcon?: IconDefinition;
  className?: string;
}

const Button = ({ children, leftIcon, rightIcon, className }: ButtonProps) => {
  return (
    <button className={`btn-primary ${className}`}>
      {leftIcon && <FontAwesomeIcon icon={leftIcon} />}
      {children}
      {rightIcon && <FontAwesomeIcon icon={rightIcon} />}
    </button>
  );
};

export default Button;
