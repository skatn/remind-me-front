import Navigation from '../../components/navigation/Navigation';
import BackButton from '../../components/navigation/BackButton';
import Toggle from '../../components/input/toggle/Toggle';
import Icon from '../../components/icon/Icon';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import Divider from '../../components/divider/Divider';
import CheckBox from '../../components/input/checkbox/CheckBox';
import Button from '../../components/input/button/Button';

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
          <div className="flex justify-between">
            <CheckBox id="select-all">전체 선택</CheckBox>
            <div className="flex cursor-pointer items-center gap-[8px]">
              <Icon icon={faTrash} size={16} className="text-support-error-1" />
              <span className="text-support-error-1">선택 삭제</span>
            </div>
          </div>

          <div className="mt-[14px] flex flex-col gap-[8px]">
            <div>
              <CheckBox>
                <div>
                  <p>
                    1. 문제이름 문제이름 문제이름 문제이름 문제이름 문제이름
                    문제이름 문제이름
                  </p>
                  <div className="mt-[4px] flex gap-[12px]">
                    <Button>수정</Button> <Button>삭제</Button>
                  </div>
                </div>
              </CheckBox>
            </div>
            <Divider />
            <div>
              <CheckBox>
                <div>
                  <p>
                    1. 문제이름 문제이름 문제이름 문제이름 문제이름 문제이름
                    문제이름 문제이름
                  </p>
                  <div className="mt-[4px] flex gap-[12px]">
                    <Button>수정</Button> <Button>삭제</Button>
                  </div>
                </div>
              </CheckBox>
            </div>
            <Divider />{' '}
            <div>
              <CheckBox>
                <div>
                  <p>
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                  </p>
                  <div className="mt-[4px] flex gap-[12px]">
                    <Button>수정</Button> <Button>삭제</Button>
                  </div>
                </div>
              </CheckBox>
            </div>
            <Divider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectManagePage;
