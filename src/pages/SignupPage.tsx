import React, { useState } from 'react';
import Input from '../components/input/text/Input';
import Button from '../components/input/button/Button';
import OutlineButton from '../components/input/button/OutlineButton';
import { SignupRequest } from '../types/auth';
import useSignup from '../components/hooks/auth/useSignup';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [signupRequest, setSignupRequest] = useState<SignupRequest>({
    name: '',
    username: '',
    password: '',
    passwordConfirm: '',
  });
  const { mutate } = useSignup();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(signupRequest, {
      onSuccess: () => {
        navigate('/login');
      },
    });
  };

  return (
    <>
      <div className="flex flex-col gap-[24px] p-[24px]">
        <span className="text-heading-md">회원가입</span>
        <form className="flex flex-col gap-[16px]" onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            title="이름"
            placeholder="name"
            value={signupRequest.name}
            onChange={(name) => setSignupRequest((prev) => ({ ...prev, name }))}
          />
          <Input
            type="text"
            name="username"
            title="아이디"
            placeholder="ID"
            value={signupRequest.username}
            onChange={(username) =>
              setSignupRequest((prev) => ({ ...prev, username }))
            }
          />
          <Input
            type="password"
            name="password"
            title="비밀번호"
            placeholder="Password"
            value={signupRequest.password}
            onChange={(password) =>
              setSignupRequest((prev) => ({ ...prev, password }))
            }
          />
          <Input
            type="password"
            name="passwordConfirm"
            placeholder="PasswordConfirm"
            value={signupRequest.passwordConfirm}
            onChange={(passwordConfirm) =>
              setSignupRequest((prev) => ({ ...prev, passwordConfirm }))
            }
          />
          <div className="flex gap-[12px]">
            <OutlineButton className="flex-1">취소</OutlineButton>
            <Button className="flex-1">회원가입</Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignupPage;
