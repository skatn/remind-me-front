import ColorSelector from '../color/ColorSelector';
import Input from '../input/text/Input';
import OutlineButton from '../input/button/OutlineButton';
import Button from '../input/button/Button';
import React, { useState } from 'react';
import { SubjectFormData } from '../../types/subject';
import LabeledToggle from '../input/toggle/LabeledToggle';
import TagInput from '../input/tag/TagInput';

interface SubjectFormProps {
  onSubmit: (formData: SubjectFormData) => void;
  onCancel: () => void;
  invalidField?: any;
}

const SubjectForm = ({
  onSubmit,
  onCancel,
  invalidField,
}: SubjectFormProps) => {
  const [formData, setFormData] = useState<SubjectFormData>({
    title: '',
    color: '',
    visibility: 'PRIVATE',
    tags: [],
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      className="mt-[26px] flex flex-col gap-[30px] px-[24px]"
      onSubmit={handleSubmit}
    >
      <LabeledToggle
        title="공개"
        description="공개시 다른 사람들도 해당 문제집을 사용할 수 있습니다."
        checked={formData.visibility === 'PUBLIC'}
        onChange={(checked) =>
          setFormData((prev) => ({
            ...prev,
            visibility: checked ? 'PUBLIC' : 'PRIVATE',
          }))
        }
      />
      <ColorSelector
        title="표지 색상"
        name="color"
        value={formData.color}
        onChange={(color) => setFormData((prev) => ({ ...prev, color }))}
      />
      <Input
        title="이름"
        name="title"
        className="w-full"
        value={formData.title}
        onChange={(title) => setFormData((prev) => ({ ...prev, title }))}
        invalid={invalidField.title.length > 0}
        supportText={invalidField.title.join('/')}
      />
      <TagInput />
      <div className="flex justify-end gap-[10px]">
        <OutlineButton
          type="button"
          className="border-neutral-dark-5 text-neutral-dark-5"
          onClick={onCancel}
        >
          취소
        </OutlineButton>
        <Button>저장</Button>
      </div>
    </form>
  );
};

export default SubjectForm;
