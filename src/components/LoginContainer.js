import React from 'react';
import * as S from './LoginContainer.styled';
import { CiUser } from 'react-icons/ci';
export default function LoginContainer({ onMovePage, authenticate, onCloseSlideBar }) {
  return (
    <S.LoginButton
      onClick={() => {
        onMovePage('/login', onCloseSlideBar);
        onCloseSlideBar && onCloseSlideBar();
      }}
    >
      <CiUser />
      <p>{authenticate ? '로그아웃' : '로그인'}</p>
    </S.LoginButton>
  );
}
