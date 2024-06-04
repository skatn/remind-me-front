interface InputProps {
  id?: string;
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
}

const Input = ({
  title,
  id,
  type,
  name,
  value,
  placeholder,
  supportText,
  invalid,
  disabled,
  className,
  onChange,
}: InputProps) => {
  return (
    <div className={`input-container ${className}`}>
      {title && (
        <label htmlFor={id} className="text-heading-xs">
          {title}
        </label>
      )}
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        className={`input-primary ${invalid && 'border-support-error-1 focus:border-support-error-1'}`}
        disabled={disabled}
        onChange={(e) =>
          onChange ? onChange(e.currentTarget.value) : () => {}
        }
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
