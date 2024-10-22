import Navigation from '../../components/navigation/Navigation';
import BackButton from '../../components/navigation/BackButton';
import { Link, useLocation, useParams } from 'react-router-dom';
import Icon from '../../components/icon/Icon';
import { faGear, faPlus } from '@fortawesome/free-solid-svg-icons';
import QuestionList from '../../components/question/QuestionList';
import { ErrorBoundary } from 'react-error-boundary';
import { Suspense } from 'react';
import QuestionListFallback from '../../components/question/QuestionListFallback';
import QuestionListSkeleton from '../../components/question/QuestionListSkeleton';

const QuestionListPage = () => {
  const location = useLocation();
  const params = useParams();

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

      <ErrorBoundary fallback={<QuestionListFallback />}>
        <Suspense fallback={<QuestionListSkeleton />}>
          <QuestionList subjectId={Number(params.subjectId)} />
        </Suspense>
      </ErrorBoundary>

      <Link
        to={`/subjects/${Number(params.subjectId)}/questions/add`}
        state={{ subject: location.state?.subject }}
        className="fixed bottom-[24px] right-[24px] flex size-[50px] items-center justify-center rounded-full bg-highlight-1 p-0"
      >
        <Icon icon={faPlus} className="text-neutral-light-5" size={22} />
      </Link>
    </div>
  );
};

export default QuestionListPage;
