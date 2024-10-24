import Navigation from '../../components/navigation/Navigation';
import BackButton from '../../components/navigation/BackButton';
import { useParams } from 'react-router-dom';
import React, { Suspense } from 'react';
import SubjectUpdateForm from '../../components/subject/SubjectUpdateForm';
import Loading from '../../components/loading/Loading';

const SubjectUpdatePage = () => {
  const { subjectId } = useParams();

  return (
    <div className="flex flex-col">
      <Navigation title="문제집 수정" left={<BackButton />} />
      <Suspense fallback={<Loading />}>
        <SubjectUpdateForm subjectId={Number(subjectId)} />
      </Suspense>
    </div>
  );
};

export default SubjectUpdatePage;
