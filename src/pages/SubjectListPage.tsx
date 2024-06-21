import Navitagion from '../components/navigation/Navitagion';
import BackButton from '../components/navigation/BackButton';
import Button from '../components/input/button/Button';
import Search from '../components/input/text/Search';
import Subject from '../components/subject/Subject';

const SubjectListPage = () => {
  return (
    <div className="flex flex-col">
      <Navitagion title="문제집" right={<BackButton />} />
      <div className="mt-[12px] flex items-center gap-[24px] px-[24px]">
        <Button className="h-[38px]">추가</Button>
        <Search className="flex-grow" />
      </div>
      <div className="mt-[24px] px-[24px]">
        <p className="text-body-md">
          총 <span className="text-highlight-1">10</span>개의 문제집이 있습니다.
        </p>
        <div className="mt-[8px] grid grid-cols-2 gap-[24px] pb-[24px]">
          <Subject
            subject={{
              id: 1,
              title: 'Spring',
              color: '81D3EB',
              questionCount: 40,
            }}
            enableEdit
          />
          <Subject
            subject={{
              id: 1,
              title: 'Spring',
              color: '81D3EB',
              questionCount: 40,
            }}
            enableEdit
          />
          <Subject
            subject={{
              id: 1,
              title: 'Spring',
              color: '81D3EB',
              questionCount: 40,
            }}
            enableEdit
          />
          <Subject
            subject={{
              id: 1,
              title: 'Spring',
              color: '81D3EB',
              questionCount: 40,
            }}
            enableEdit
          />
          <Subject
            subject={{
              id: 1,
              title: 'Spring',
              color: '81D3EB',
              questionCount: 40,
            }}
            enableEdit
          />
          <Subject
            subject={{
              id: 1,
              title: 'Spring',
              color: '81D3EB',
              questionCount: 40,
            }}
            enableEdit
          />
          <Subject
            subject={{
              id: 1,
              title: 'Spring',
              color: '81D3EB',
              questionCount: 40,
            }}
            enableEdit
          />
          <Subject
            subject={{
              id: 1,
              title: 'Spring',
              color: '81D3EB',
              questionCount: 40,
            }}
            enableEdit
          />
          <Subject
            subject={{
              id: 1,
              title: 'Spring',
              color: '81D3EB',
              questionCount: 40,
            }}
            enableEdit
          />
          <Subject
            subject={{
              id: 1,
              title: 'Spring',
              color: '81D3EB',
              questionCount: 40,
            }}
            enableEdit
          />
          <Subject
            subject={{
              id: 1,
              title: 'Spring',
              color: '81D3EB',
              questionCount: 40,
            }}
            enableEdit
          />
        </div>
      </div>
    </div>
  );
};

export default SubjectListPage;
