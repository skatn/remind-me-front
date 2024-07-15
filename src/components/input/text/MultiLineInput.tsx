import { useRef } from 'react';

interface MultiLineInputProps {
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

const MultiLineInput = ({
  title,
  name,
  value,
  placeholder,
  supportText,
  invalid,
  disabled,
  className,
  onChange,
}: MultiLineInputProps) => {
  const ref = useRef<HTMLTextAreaElement | null>(null);

  const adjustTextareaHeight = () => {
    const textarea = ref.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  return (
    <div className={`input-container ${className}`}>
      {title && (
        <label htmlFor={name} className="text-heading-md">
          {title}
        </label>
      )}
      <textarea
        ref={ref}
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        className={`input-primary resize-none overflow-hidden ${invalid && 'border-support-error-1 focus:border-support-error-1'}`}
        disabled={disabled}
        onChange={(e) => {
          const textarea = ref.current;
          if (!textarea) return;

          const inputValue = e.currentTarget.value;
          if (inputValue.match(/^\s+/)) {
            textarea.value = '';

            return;
          }

          if (onChange) {
            onChange(inputValue);
          }
          adjustTextareaHeight();
        }}
        rows={1}
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

export default MultiLineInput;
