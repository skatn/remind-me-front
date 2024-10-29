import React from 'react';
import Navigation from '../../components/navigation/Navigation';
import BackButton from '../../components/navigation/BackButton';
import SubjectAddForm from '../../components/subject/SubjectAddForm';

const SubjectAddPage = () => {
  return (
    <div className="flex flex-col">
      <Navigation title="문제집 추가" left={<BackButton />} />
      <SubjectAddForm />
    </div>
  );
};

export default SubjectAddPage;
