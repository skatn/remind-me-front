import Input from '../components/input/text/Input';
import Button from '../components/input/button/Button';
import Divider from '../components/divider/Divider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import { LoginRequest } from '../types/auth';
import useLogin from '../hooks/auth/useLogin';
import useInvalid from '../hooks/valid/useInvalid';
import { ToastContext } from '../contexts/ToastContext';
import { AxiosError } from 'axios';
import { ErrorResponse } from '../types/axios';
import { AuthenticationContext } from '../contexts/AuthenticationContext';

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { addToast } = useContext(ToastContext);
  const { mutate } = useLogin();
  const { authentication } = useContext(AuthenticationContext);

  const [loginRequest, setLoginRequest] = useState<LoginRequest>({
    username: '',
    password: '',
  });
  const { invalidField, check } = useInvalid({
    username: [],
    password: [],
  });

  useEffect(() => {
    if (authentication.isAuthenticated) {
      navigate(location.state?.redirect || '/');
    }
  }, [authentication, navigate, location]);

  const handleLogin: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    mutate(loginRequest, {
      onSuccess: () => {
        navigate(location.state?.redirect || '/');
      },
      onError: (error) => {
        const errors = check(error);
        if (errors) {
          return;
        }

        if (error instanceof AxiosError) {
          const response: ErrorResponse = error.response?.data;
          addToast({
            type: 'error',
            title: '로그인 실패',
            description: response.message,
          });
          return;
        }

        addToast({
          type: 'error',
          title: '로그인 실패',
          description: error.message,
        });
      },
    });
  };

  return (
    <div className="flex flex-col gap-[24px] px-[24px] py-[24px]">
      <span className="text-heading-md">로그인</span>
      <form className="flex flex-col" onSubmit={handleLogin}>
        <Input
          type="text"
          name="username"
          placeholder="ID"
          value={loginRequest.username}
          onChange={(username) =>
            setLoginRequest((prev) => ({ ...prev, username }))
          }
          invalid={invalidField.username.length > 0}
          supportText={invalidField.username.join('\n')}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          className="mt-[16px]"
          value={loginRequest.password}
          onChange={(password) =>
            setLoginRequest((prev) => ({ ...prev, password }))
          }
          invalid={invalidField.password.length > 0}
          supportText={invalidField.password.join('\n')}
        />
        <Button className="mt-[24px]">로그인</Button>
      </form>
      <div className="text-body-sm mx-auto text-neutral-dark-5">
        아직 회원이 아니신가요?
        <Link to="/signup" className="ms-1 font-bold text-highlight-1">
          회원가입
        </Link>
      </div>
      <Divider />
      <div className="flex flex-col">
        <span className="text-body-sm mx-auto text-neutral-dark-4">
          소셜 계정으로 이용하기
        </span>
        <div className="mt-[16px] flex justify-center gap-5">
          <Link to={`${process.env.REACT_APP_HOST}/oauth2/authorization/naver`}>
            <img
              alt="naver login"
              src="/images/naver.jpg"
              className="size-10 rounded-full"
            />
          </Link>
          <Link to={`${process.env.REACT_APP_HOST}/oauth2/authorization/kakao`}>
            <img
              alt="kakao login"
              src="/images/kakao.jpg"
              className="size-10 rounded-full"
            />
          </Link>
          <Link
            to={`${process.env.REACT_APP_HOST}/oauth2/authorization/google`}
          >
            <img
              alt="google login"
              src="/images/google.jpg"
              className="size-10 rounded-full"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
