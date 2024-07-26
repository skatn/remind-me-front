import Navigation from '../../components/navigation/Navigation';
import BackButton from '../../components/navigation/BackButton';
import Divider from '../../components/divider/Divider';
import useLogout from '../../hooks/auth/useLogout';

const SettingPage = () => {
  const { logout } = useLogout();

  return (
    <div className="flex flex-col">
      <Navigation title="설정" left={<BackButton />} />
      <div className="m-[24px] flex flex-col gap-[4px]">
        <span
          className="cursor-pointer rounded-md p-[10px] hover:bg-neutral-light-4"
          onClick={logout}
        >
          로그아웃
        </span>
        <Divider />
        <span className="cursor-pointer rounded-md p-[10px] hover:bg-neutral-light-4">
          회원 탈퇴
        </span>
      </div>
    </div>
  );
};

export default SettingPage;
