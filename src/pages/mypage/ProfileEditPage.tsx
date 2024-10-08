import Navigation from '../../components/navigation/Navigation';
import BackButton from '../../components/navigation/BackButton';
import Input from '../../components/input/text/Input';
import useFetchProfile from '../../hooks/member/useFetchProfile';
import useUpdateProfile from '../../hooks/member/useUpdateProfile';
import { useEffect, useState } from 'react';
import OutlineButton from '../../components/input/button/OutlineButton';
import Button from '../../components/input/button/Button';
import useInvalid from '../../hooks/valid/useInvalid';
import useRemindMeNavigate from '../../hooks/navigation/useRemindMeNavigate';

const ProfileEditPage = () => {
  const [name, setName] = useState<string>('');
  const { invalidField, check } = useInvalid({
    name: [],
  });
  const { data: profile, isSuccess } = useFetchProfile();
  const { mutate } = useUpdateProfile();
  const { back } = useRemindMeNavigate();

  useEffect(() => {
    if (isSuccess) setName(profile.name);
  }, [isSuccess, profile, setName]);

  const handleSave = () => {
    mutate(
      { name },
      {
        onSuccess: () => back(),
        onError: (error) => {
          check(error);
        },
      },
    );
  };

  return (
    <div className="flex flex-col">
      <Navigation title="내정보 수정" left={<BackButton />} />

      <div className="m-[24px] flex flex-col gap-[24px]">
        <Input
          title="이름"
          className="w-full"
          value={name}
          onChange={(value) => setName(value)}
          invalid={invalidField.name.length > 0}
          supportText={invalidField.name.join('\n')}
        />

        <div className="flex gap-[12px]">
          <OutlineButton className="flex-1" onClick={back}>
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
