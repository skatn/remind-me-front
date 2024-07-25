import Navigation from '../../components/navigation/Navigation';
import BackButton from '../../components/navigation/BackButton';
import Input from '../../components/input/text/Input';
import useFetchProfile from '../../hooks/member/useFetchProfile';
import useUpdateProfile from '../../hooks/member/useUpdateProfile';
import { useEffect, useState } from 'react';
import OutlineButton from '../../components/input/button/OutlineButton';
import Button from '../../components/input/button/Button';
import { useNavigate } from 'react-router-dom';

const ProfileEditPage = () => {
  const [name, setName] = useState<string>('');
  const { data: profile, isSuccess } = useFetchProfile();
  const { mutate } = useUpdateProfile();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) setName(profile.name);
  }, [isSuccess, profile, setName]);

  const handleSave = () => {
    mutate(
      { name },
      {
        onSuccess: () => navigate(-1),
      },
    );
  };

  return (
    <div className="flex flex-col">
      <Navigation title="내정보 수정" left={<BackButton />} />

      <div className="m-[24px] flex flex-col gap-[24px]">
        <Input
          title="아이디"
          className="w-full"
          value={profile?.username}
          disabled
        />
        <Input
          title="이름"
          className="w-full"
          value={name}
          onChange={(value) => setName(value)}
        />

        <div className="flex gap-[12px]">
          <OutlineButton className="flex-1" onClick={() => navigate(-1)}>
            취소
          </OutlineButton>
          <Button className="flex-1" onClick={handleSave}>
            저장
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileEditPage;
