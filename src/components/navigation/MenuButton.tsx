import Icon from '../icon/Icon';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const MenuButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <button onClick={() => setIsOpen((prev) => !prev)}>
        <Icon icon={faBars} size={22} />
      </button>
      <div
        className={`${isOpen ? '' : 'invisible'} absolute left-0 top-full flex w-full flex-col gap-2 bg-neutral-light-5 p-2 text-center`}
      >
        <div className="rounded-md p-[10px] hover:bg-neutral-light-4">
          마이페이지
        </div>
        <div className="rounded-md p-[10px] hover:bg-neutral-light-4">설정</div>
      </div>
    </>
  );
};

export default MenuButton;
