import Navigation from '../components/navigation/Navigation';
import BackButton from '../components/navigation/BackButton';
import QuillViewer from '../components/editor/QuillViewer';
import { useLocation } from 'react-router-dom';

const ExplainPage = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col">
      <Navigation title="해설" left={<BackButton />} />
      <div className="p-[24px]">
        <QuillViewer value={location.state.explanation} />
      </div>
    </div>
  );
};

export default ExplainPage;
