import Navigation from '../components/navigation/Navigation';
import BackButton from '../components/navigation/BackButton';
import { Link, useLocation, useParams } from 'react-router-dom';
import Icon from '../components/icon/Icon';
import { faGear, faPlus } from '@fortawesome/free-solid-svg-icons';
import useFetchQuestionList from '../hooks/question/useFetchQuestionList';
import Question from '../components/question/Question';

const QuestionListPage = () => {
  const location = useLocation();
  const params = useParams();
  const { content, ref } = useFetchQuestionList({
    size: 10,
    subjectId: Number(params.subjectId),
  });

  return (
    <div className="flex flex-col">
      <Navigation
        title={location.state?.subject.title}
        left={<BackButton />}
        right={
          <Link to={`/subjects/${Number(params.subjectId)}/manage`}>
            <Icon icon={faGear} size={22} />
          </Link>
        }
      />

      {content.length === 0 && <h1>문제가 없어요</h1>}

      <div className="flex flex-col gap-[10px] p-[24px]">
        {content.map((question, index) => (
          <Link
            key={question.id}
            to={`/subjects/${Number(params.subjectId)}/questions/${question.id}`}
          >
            <Question question={question} index={index} />
          </Link>
        ))}
      </div>

      <div ref={ref}></div>

      <Link
        to={`/subjects/${Number(params.subjectId)}/questions/add`}
        state={{ subject: location.state?.subject }}
        className="absolute bottom-[24px] right-[24px] flex size-[50px] items-center justify-center rounded-full bg-highlight-1 p-0"
      >
        <Icon icon={faPlus} className="text-neutral-light-5" size={22} />
      </Link>
    </div>
  );
};

export default QuestionListPage;
