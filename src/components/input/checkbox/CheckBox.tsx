import { ComponentPropsWithRef } from 'react';
import Icon from '../../icon/Icon';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

interface CheckBoxProps extends ComponentPropsWithRef<'input'> {}

const CheckBox = ({ id, children, ...attributes }: CheckBoxProps) => {
  return (
    <label htmlFor={id} className="flex items-center gap-[8px]">
      <div className="relative size-[16px]">
        <input
          type="checkbox"
          id={id}
          className="peer size-[16px] shrink-0 appearance-none rounded-[4px] border border-neutral-light-1 checked:border-0 checked:bg-highlight-1"
          {...attributes}
        />
        <Icon
          icon={faCheck}
          size={10}
          className="invisible absolute start-[3px] top-[3px] text-neutral-light-5 peer-checked:visible"
        />
      </div>
      {children}
    </label>
  );
};

export default CheckBox;
