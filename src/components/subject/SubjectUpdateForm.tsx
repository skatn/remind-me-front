import useInvalid from '../../hooks/valid/useInvalid';
import React, { useContext } from 'react';
import { ToastContext } from '../../contexts/ToastContext';
import useRemindMeNavigate from '../../hooks/navigation/useRemindMeNavigate';
import SubjectForm from './SubjectForm';
import { SubjectFormData } from '../../types/subject';
import useUpdateSubject from '../../hooks/subject/useUpdateSubject';
import useFetchSubject from '../../hooks/subject/useFetchSubject';

interface SubjectUpdateFormProps {
  subjectId: number;
}

const SubjectUpdateForm = ({ subjectId }: SubjectUpdateFormProps) => {
  const { mutate } = useUpdateSubject(subjectId);
  const { data: subject } = useFetchSubject(subjectId);

  const { invalidField, check } = useInvalid({
    title: [],
    color: [],
  });
  const { addToast } = useContext(ToastContext);
  const { back } = useRemindMeNavigate();

  const handleSubmit = (formData: SubjectFormData) => {
    mutate(formData, {
      onSuccess: () => {
        back();
      },
      onError: (error) => {
        const errors = check(error);
        if (errors?.color.length! > 0) {
          addToast({
            type: 'error',
            title: '문제집 수정 실패',
            description: '색상을 선택해 주세요.',
          });
        }
      },
    });
  };

  return (
    <SubjectForm
      onSubmit={handleSubmit}
      onCancel={back}
      invalidField={invalidField}
      initialData={{
        title: subject.title,
        color: subject.color,
        visibility: subject.visibility,
        tags: subject.tags,
      }}
    />
  );
};

export default SubjectUpdateForm;
