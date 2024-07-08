import Navigation from '../components/navigation/Navigation';
import { useLocation } from 'react-router-dom';
import BackButton from '../components/navigation/BackButton';
import QuillEditor from '../components/editor/QuillEditor';
import Icon from '../components/icon/Icon';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import QuestionChoiceInput from '../components/question/QuestionChoiceInput';

const QuestionAddPage = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col">
      <Navigation title={location.state?.subject.title} left={<BackButton />} />
      <div className="p-[24px]">
        <h1 className="text-heading-md">답변 형식</h1>
        <div className="mt-[8px] flex items-center">
          <input
            type="radio"
            id="choice"
            name="questionType"
            className="input-radio me-[10px]"
          />
          <label htmlFor="choice" className="text-body-md">
            객관식
          </label>
          <input
            type="radio"
            id="descriptive"
            name="questionType"
            className="input-radio me-[10px] ms-[28px]"
          />
          <label htmlFor="descriptive" className="text-body-md">
            서술형
          </label>
        </div>

        <h1 className="text-heading-md mb-[8px] mt-[40px]">질문</h1>
        <QuillEditor />

        <h1 className="text-heading-md mb-[8px] mt-[40px]">
          답변
          <div className="ms-[14px] inline-flex items-center gap-[3px]">
            <Icon
              icon={faInfoCircle}
              size={12}
              className="text-neutral-dark-5"
            />
            <span className="text-body-sm text-neutral-dark-5">
              답변은 3 ~ 5개 까지 작성할 수 있습니다.
            </span>
          </div>
        </h1>
        <QuestionChoiceInput />

        <h1 className="text-heading-md mb-[8px] mt-[40px]">풀이</h1>
        <QuillEditor />
      </div>
    </div>
  );
};

export default QuestionAddPage;
