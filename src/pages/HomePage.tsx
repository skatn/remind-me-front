import Navitagion from '../components/navigation/Navitagion';
import MenuButton from '../components/navigation/MenuButton';
import Banner from '../components/banner/Banner';
import HorizontalList from '../components/list/HorizontalList';
import Subject from '../components/subject/Subject';

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <Navitagion title="Remind me" left={<MenuButton />} />
      <Banner />
      <HorizontalList title="최근 학습한 문제집" className="mt-[24px]">
        <Subject
          title="동해물과백두산이마르고닳도록"
          color="D5E05B"
          questionCount={40}
        />
        <Subject title="Spring" color="D5E05B" questionCount={40} />
        <Subject title="Spring" color="D5E05B" questionCount={40} />
        <Subject title="Spring" color="D5E05B" questionCount={40} />
        <Subject title="Spring" color="D5E05B" questionCount={40} />
        <Subject title="Spring" color="D5E05B" questionCount={40} />
        <Subject title="Spring" color="D5E05B" questionCount={40} />
        <Subject title="Spring" color="D5E05B" questionCount={40} />
      </HorizontalList>

      <HorizontalList
        title="문제집"
        className="mt-[24px]"
        action={() => {}}
        actionText="더보기"
      >
        <Subject
          title="동해물과백두산이마르고닳도록"
          color="D5E05B"
          questionCount={40}
        />
        <Subject title="Spring" color="D5E05B" questionCount={40} />
        <Subject title="Spring" color="D5E05B" questionCount={40} />
        <Subject title="Spring" color="D5E05B" questionCount={40} />
        <Subject title="Spring" color="D5E05B" questionCount={40} />
        <Subject title="Spring" color="D5E05B" questionCount={40} />
        <Subject title="Spring" color="D5E05B" questionCount={40} />
        <Subject title="Spring" color="D5E05B" questionCount={40} />
      </HorizontalList>
    </div>
  );
};

export default HomePage;
