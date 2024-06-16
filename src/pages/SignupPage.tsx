import React from 'react';
import Input from '../components/input/text/Input';
import Button from '../components/input/button/Button';
import OutlineButton from '../components/input/button/OutlineButton';

const SignupPage = () => {
  return (
    <div className="flex flex-col gap-[24px] p-[24px]">
      <span className="text-heading-md">회원가입</span>
      <form className="flex flex-col gap-[16px]">
        <Input type="text" name="name" title="이름" placeholder="name" />
        <Input type="text" name="username" title="아이디" placeholder="ID" />
        <Input
          type="text"
          name="password"
          title="비밀번호"
          placeholder="Password"
        />
        <Input
          type="text"
          name="passwordConfirm"
          placeholder="PasswordConfirm"
        />
        <div className="flex gap-[12px]">
          <OutlineButton className="flex-1">취소</OutlineButton>
          <Button className="flex-1">회원가입</Button>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
