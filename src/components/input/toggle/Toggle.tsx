interface ToggleProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

const Toggle = ({ checked, onChange, className }: ToggleProps) => {
  return (
    <label className={`inline-flex cursor-pointer items-center ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        className="peer sr-only"
        onChange={(e) => onChange && onChange(e.currentTarget.checked)}
      />
      <div className="peer relative h-[24px] w-[38px] rounded-full bg-neutral-light-2 after:absolute after:start-[3px] after:top-[3px] after:size-[18px] after:rounded-full after:bg-neutral-light-5 after:transition-all after:content-[''] peer-checked:bg-highlight-1 peer-checked:after:translate-x-[14px]" />
    </label>
  );
};

export default Toggle;
