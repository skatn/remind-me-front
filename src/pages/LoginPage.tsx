import Input from '../components/input/text/Input';
import Button from '../components/input/button/Button';
import Divider from '../components/divider/Divider';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const LoginPage = () => {
  const [loginParam, setLoginParam] = useState({
    username: '',
    password: '',
  });

  const handleUsernameChange = (value: string) => {
    setLoginParam((prev) => ({ ...prev, username: value }));
  };

  const handlePasswordChange = (value: string) => {
    setLoginParam((prev) => ({ ...prev, password: value }));
  };

  const handleLogin: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex flex-col gap-[24px] px-[24px] py-[24px]">
      <span className="text-heading-md">로그인</span>
      <form className="flex flex-col" onSubmit={handleLogin}>
        <Input
          type="text"
          name="username"
          placeholder="ID"
          value={loginParam.username}
          onChange={handleUsernameChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          className="mt-[16px]"
          value={loginParam.password}
          onChange={handlePasswordChange}
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
          <Link to="">
            <img
              alt="naver login"
              src="/images/naver.jpg"
              className="size-10 rounded-full"
            />
          </Link>
          <Link to="">
            <img
              alt="kakao login"
              src="/images/kakao.jpg"
              className="size-10 rounded-full"
            />
          </Link>
          <Link to="">
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
