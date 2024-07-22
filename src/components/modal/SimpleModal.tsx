import Modal from './Modal';
import OutlineButton from '../input/button/OutlineButton';
import Button from '../input/button/Button';

interface SimpleModalProps {
  title: string;
  desc: string;
  leftBtnTxt: string;
  rightBtnTxt: string;
  onClickLeftBtn: () => void;
  onClickRightBtn: () => void;
}

const SimpleModal = ({
  title,
  desc,
  leftBtnTxt,
  rightBtnTxt,
  onClickLeftBtn,
  onClickRightBtn,
}: SimpleModalProps) => {
  return (
    <Modal>
      <h1 className="text-heading-md">{title}</h1>
      <p className="text-body-sm mt-[8px] text-neutral-dark-4">{desc}</p>
      <div className="mt-[20px] flex w-full gap-[8px]">
        <OutlineButton className="flex-1" onClick={onClickLeftBtn}>
          {leftBtnTxt}
        </OutlineButton>
        <Button className="flex-1" onClick={onClickRightBtn}>
          {rightBtnTxt}
        </Button>
      </div>
    </Modal>
  );
};

export default SimpleModal;
