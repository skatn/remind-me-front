import Navigation from '../../components/navigation/Navigation';
import Button from '../../components/input/button/Button';
import Search from '../../components/input/text/Search';
import { Suspense, useState } from 'react';
import { SubjectListGetRequest } from '../../types/subject';
import useRemindMeNavigate from '../../hooks/navigation/useRemindMeNavigate';
import SubjectGrid from '../../components/subject/SubjectGrid';
import { ErrorBoundary } from 'react-error-boundary';
import SubjectGridFallback from '../../components/subject/SubjectGridFallback';
import SubjectGridSkeleton from '../../components/subject/SubjectGridSkeleton';
import BottomNavigation from '../../components/navigation/BottomNavigation';

const SubjectListPage = () => {
  const { navigate } = useRemindMeNavigate();
  const [request, setRequest] = useState<SubjectListGetRequest>({ size: 10 });

  return (
    <div className="flex flex-col">
      <Navigation title="문제집" />

      <div className="mt-[12px] flex items-center gap-[24px] px-[24px]">
        <Button className="h-[38px]" onClick={() => navigate('/subjects/add')}>
          추가
        </Button>
        <Search
          className="flex-grow"
          value={request.title}
          onChange={(title) => setRequest((prev) => ({ ...prev, title }))}
        />
      </div>

      <ErrorBoundary fallback={<SubjectGridFallback />}>
        <Suspense fallback={<SubjectGridSkeleton />}>
          <SubjectGrid request={request} />
        </Suspense>
      </ErrorBoundary>

      <BottomNavigation />
    </div>
  );
};

export default SubjectListPage;
