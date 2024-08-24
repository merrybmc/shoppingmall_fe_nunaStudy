import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import * as S from './Login.styled.js';

export default function Login({ setAuthenticate }) {
  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    setAuthenticate(true);
    navigate('/');
  };
  return (
    <div>
      <S.LoginForm onSubmit={(e) => loginUser(e)}>
        <LoginInput type={'email'} />
        <LoginInput type={'password'} />
        <S.Button>로그인</S.Button>
      </S.LoginForm>
    </div>
  );
}
