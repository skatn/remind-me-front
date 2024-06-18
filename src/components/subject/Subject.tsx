interface SubjectProps {
  title: string;
  color: string;
  questionCount: number;
}

const Subject = ({ title, color, questionCount }: SubjectProps) => {
  return (
    <div
      className="relative flex size-[110px] min-h-[110px] min-w-[110px] items-center justify-center rounded-[8px] p-[8px]"
      style={{ background: `#${color}` }}
    >
      <span className="text-heading-sm">{title}</span>
      <span className="text-body-sm absolute bottom-[8px] end-[11px] text-neutral-dark-5">
        {questionCount} 문제
      </span>
    </div>
  );
};

export default Subject;
