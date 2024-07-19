import Button from '../input/button/Button';

interface QuestionManageListItemProps {
  index: number;
  question: string;
  onClickEdit: () => void;
  onClickDelete: () => void;
}

const QuestionManageListItem = ({
  index,
  question,
  onClickEdit,
  onClickDelete,
}: QuestionManageListItemProps) => {
  return (
    <div>
      <div className="flex gap-[4px]">
        {index}.<p>{question}</p>
      </div>
      <div className="mt-[4px] flex gap-[12px]">
        <Button onClick={onClickEdit}>수정</Button>
        <Button onClick={onClickDelete}>삭제</Button>
      </div>
    </div>
  );
};

export default QuestionManageListItem;
