import Navitagion from '../components/navigation/Navitagion';
import BackButton from '../components/navigation/BackButton';
import Button from '../components/input/button/Button';
import Search from '../components/input/text/Search';
import Subject from '../components/subject/Subject';
import useFetchSubjectList from '../hooks/subject/useFetchSubjectList';

const SubjectListPage = () => {
  const { content: subjects, ref } = useFetchSubjectList({ size: 1 });

  return (
    <div className="flex flex-col">
      <Navitagion title="문제집" right={<BackButton />} />
      <div className="mt-[12px] flex items-center gap-[24px] px-[24px]">
        <Button className="h-[38px]">추가</Button>
        <Search className="flex-grow" />
      </div>
      <div className="mt-[24px] grid grid-cols-2 gap-[24px] px-[24px] pb-[24px]">
        {subjects.map((subject) => (
          <Subject key={subject.id} subject={subject} enableEdit />
        ))}
      </div>
      <div ref={ref}></div>
    </div>
  );
};

export default SubjectListPage;
