const SubjectListFallback = () => {
  return (
    <div
      className={`relative flex aspect-square h-[110px] w-full flex-shrink-0 select-none items-center justify-center rounded-[8px] bg-neutral-light-4 p-[8px] hover:cursor-pointer`}
    >
      문제집 로딩 도중 문제가 발생했습니다.
    </div>
  );
};

export default SubjectListFallback;
