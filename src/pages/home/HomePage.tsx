import Navigation from '../../components/navigation/Navigation';
import MenuButton from '../../components/navigation/MenuButton';
import Banner from '../../components/banner/Banner';
import HorizontalList from '../../components/list/HorizontalList';
import Subject from '../../components/subject/Subject';
import useFetchSubjectList from '../../hooks/subject/useFetchSubjectList';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const { content: subjects } = useFetchSubjectList({ size: 10 });

  return (
    <div className="flex flex-col">
      <Navigation title="Remind me" right={<MenuButton />} />
      <Banner />
      <HorizontalList title="최근 학습한 문제집" className="mt-[24px]">
        <Subject
          subject={{
            id: 1,
            title: '동해물과백두산이마르고닳도록',
            color: 'D5E05B',
            questionCount: 40,
          }}
          className="size-[110px] flex-shrink-0"
        />
        <Subject
          subject={{
            id: 1,
            title: '동해물과백두산이마르고닳도록',
            color: 'D5E05B',
            questionCount: 40,
          }}
          className="size-[110px] flex-shrink-0"
        />
        <Subject
          subject={{
            id: 1,
            title: '동해물과백두산이마르고닳도록',
            color: 'D5E05B',
            questionCount: 40,
          }}
          className="size-[110px] flex-shrink-0"
        />
      </HorizontalList>

      <HorizontalList
        title="문제집"
        className="mt-[24px]"
        action={() => {
          navigate('/subjects');
        }}
        actionText="더보기"
      >
        {subjects.map((subject) => (
          <Subject
            key={subject.id}
            subject={subject}
            className="size-[110px] flex-shrink-0"
          />
        ))}
      </HorizontalList>
    </div>
  );
};

export default HomePage;
