import React from 'react';
import * as S from './LoginInput.styled';

export default function LoginInput({ type }) {
  if (type === 'email') {
    return (
      <S.InputBox>
        <S.Text>이메일</S.Text>
        <S.Input />
      </S.InputBox>
    );
  }

  if (type === 'password') {
    return (
      <S.InputBox>
        <S.Text>비밀번호</S.Text>
        <S.Input />
      </S.InputBox>
    );
  }
}
