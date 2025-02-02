interface InputProps {
  type?: string;
  name?: string;
  value?: string | number;
  placeholder?: string;
  title?: string;
  supportText?: string;
  invalid?: boolean;
  disabled?: boolean;
  className?: string;
  onChange?: (value: string) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Input = ({
  title,
  type = 'text',
  name,
  value,
  placeholder,
  supportText,
  invalid,
  disabled,
  className,
  onChange,
  onKeyDown,
}: InputProps) => {
  return (
    <div className={`input-container ${className}`}>
      {title && (
        <label htmlFor={name} className="text-heading-md">
          {title}
        </label>
      )}
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        className={`input-primary ${invalid && 'border-support-error-1 focus:border-support-error-1'}`}
        disabled={disabled}
        onChange={(e) =>
          onChange ? onChange(e.currentTarget.value) : () => {}
        }
        onKeyDown={(e) => (onKeyDown ? onKeyDown(e) : () => {})}
        autoComplete="off"
      />
      {supportText && (
        <p
          className={`text-body-xs ${invalid ? 'text-support-error-1' : 'text-neutral-dark-5'}`}
        >
          {supportText}
        </p>
      )}
    </div>
  );
};

export default Input;
