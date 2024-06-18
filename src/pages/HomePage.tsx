import Navitagion from '../components/navigation/Navitagion';
import BackButton from '../components/navigation/BackButton';

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <Navitagion title="Remind me" right={<BackButton />} />
    </div>
  );
};

export default HomePage;
