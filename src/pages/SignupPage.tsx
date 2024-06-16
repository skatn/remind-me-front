import React, { useContext, useState } from 'react';
import Input from '../components/input/text/Input';
import Button from '../components/input/button/Button';
import OutlineButton from '../components/input/button/OutlineButton';
import { SignupRequest } from '../types/auth';
import useSignup from '../hooks/auth/useSignup';
import { useNavigate } from 'react-router-dom';
import useInvalid from '../hooks/valid/useInvalid';
import { ToastContext } from '../contexts/ToastContext';

const SignupPage = () => {
  const [signupRequest, setSignupRequest] = useState<SignupRequest>({
    name: '',
    username: '',
    password: '',
    passwordConfirm: '',
  });
  const { invalidField, check } = useInvalid({
    name: [],
    username: [],
    password: [],
    passwordConfirm: [],
    globalErrors: [],
  });

  const { mutate } = useSignup();
  const navigate = useNavigate();
  const { addToast } = useContext(ToastContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(signupRequest, {
      onSuccess: () => {
        navigate('/login');
      },
      onError: (error) => {
        const errors = check(error);
        errors?.globalErrors.forEach((e) =>
          addToast({ type: 'error', title: '회원가입 실패', description: e }),
        );
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
            invalid={invalidField.name.length > 0}
            supportText={invalidField.name.join('\n')}
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
            invalid={invalidField.username.length > 0}
            supportText={invalidField.username.join('\n')}
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
            invalid={invalidField.password.length > 0}
            supportText={invalidField.password.join('\n')}
          />
          <Input
            type="password"
            name="passwordConfirm"
            placeholder="PasswordConfirm"
            value={signupRequest.passwordConfirm}
            onChange={(passwordConfirm) =>
              setSignupRequest((prev) => ({ ...prev, passwordConfirm }))
            }
            invalid={invalidField.passwordConfirm.length > 0}
            supportText={invalidField.passwordConfirm.join('\n')}
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
