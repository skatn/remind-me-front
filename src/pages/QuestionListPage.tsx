import Navigation from '../components/navigation/Navigation';
import BackButton from '../components/navigation/BackButton';
import { useLocation, useParams } from 'react-router-dom';
import Icon from '../components/icon/Icon';
import { faGear, faPlus } from '@fortawesome/free-solid-svg-icons';
import useFetchQuestionList from '../hooks/question/useFetchQuestionList';
import Button from '../components/input/button/Button';
import Question from '../components/question/Question';

const QuestionListPage = () => {
  const location = useLocation();
  const params = useParams();
  const { content } = useFetchQuestionList({
    size: 10,
    subjectId: Number(params.subjectId),
  });

  return (
    <div className="flex flex-col">
      <Navigation
        title={location.state?.subject.title}
        left={<BackButton />}
        right={<Icon icon={faGear} size={22} />}
      />

      {content.length === 0 && <h1>문제가 없어요</h1>}

      <div className="flex flex-col gap-[10px] p-[24px]">
        {content.map((question) => (
          <Question key={question.id} question={question} />
        ))}
      </div>

      <Button className="absolute bottom-[24px] right-[24px] size-[50px] rounded-full p-0">
        <Icon icon={faPlus} className="text-neutral-light-5" size={22} />
      </Button>
    </div>
  );
};

export default QuestionListPage;
