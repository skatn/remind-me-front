import Navigation from '../../components/navigation/Navigation';
import BackButton from '../../components/navigation/BackButton';
import ColorSelector from '../../components/color/ColorSelector';
import Input from '../../components/input/text/Input';
import OutlineButton from '../../components/input/button/OutlineButton';
import Button from '../../components/input/button/Button';
import React, { useContext, useState } from 'react';
import useAddSubject from '../../hooks/subject/useAddSubject';
import { SubjectAddRequest } from '../../types/subject';
import useInvalid from '../../hooks/valid/useInvalid';
import { ToastContext } from '../../contexts/ToastContext';
import { useNavigate } from 'react-router-dom';

const SubjectAddPage = () => {
  const { mutate } = useAddSubject();
  const [params, setParams] = useState<SubjectAddRequest>({
    title: '',
    color: '',
  });
  const { invalidField, check } = useInvalid({
    title: [],
    color: [],
  });
  const { addToast } = useContext(ToastContext);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(params, {
      onSuccess: () => {
        navigate(-1);
      },
      onError: (error) => {
        const errors = check(error);
        if (errors?.color.length! > 0) {
          addToast({
            type: 'error',
            title: '문제집 추가 실패',
            description: '색상을 선택해 주세요.',
          });
        }
      },
    });
  };

  return (
    <div className="flex flex-col">
      <Navigation title="문제집 추가" left={<BackButton />} />
      <form className="mt-[26px] px-[24px]" onSubmit={handleSubmit}>
        <h1 className="text-heading-md mb-[8px]">표지 색상</h1>
        <ColorSelector
          name="color"
          value={params.color}
          onChange={(color) => setParams((prev) => ({ ...prev, color }))}
        />
        <Input
          title="이름"
          name="title"
          className="mt-[40px] w-full"
          value={params.title}
          onChange={(title) => setParams((prev) => ({ ...prev, title }))}
          invalid={invalidField.title.length > 0}
          supportText={invalidField.title.join('/')}
        />
        <div className="mt-[40px] flex justify-end gap-[10px]">
          <OutlineButton
            type="button"
            className="border-neutral-dark-5 text-neutral-dark-5"
            onClick={() => navigate(-1)}
          >
            취소
          </OutlineButton>
          <Button>저장</Button>
        </div>
      </form>
    </div>
  );
};

export default SubjectAddPage;
