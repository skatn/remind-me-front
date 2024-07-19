import Navigation from '../../components/navigation/Navigation';
import BackButton from '../../components/navigation/BackButton';
import Toggle from '../../components/input/toggle/Toggle';
import Icon from '../../components/icon/Icon';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import Divider from '../../components/divider/Divider';
import QuestionManageListItem from '../../components/question/QuestionManageListItem';

const SubjectManagePage = () => {
  return (
    <div className="flex flex-col">
      <Navigation title="문제집 관리" left={<BackButton />} />
      <div className="flex flex-col gap-[10px] p-[24px]">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-body-md">Push 알림</span>
            <span className="text-body-xs text-neutral-dark-5">
              off시 해당 문제집에 수록된 문제들의 알림을 받지 않습니다.
            </span>
          </div>
          <Toggle />
        </div>

        <Divider />

        <div className="flex justify-between">
          <span className="text-body-md text-support-error-1">문제집 삭제</span>
          <Icon icon={faTrash} className="text-support-error-1" />
        </div>

        <div className="mt-[40px]">
          <div className="mt-[14px] flex flex-col gap-[8px]">
            <QuestionManageListItem
              index={1}
              question="문제 문제 문제"
              onClickEdit={() => {}}
              onClickDelete={() => {}}
            />
            <Divider />
            <QuestionManageListItem
              index={2}
              question="문제 문제 문제"
              onClickEdit={() => {}}
              onClickDelete={() => {}}
            />
            <Divider />
            <QuestionManageListItem
              index={3}
              question="문제 문제 문제"
              onClickEdit={() => {}}
              onClickDelete={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectManagePage;
