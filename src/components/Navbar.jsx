import React from 'react';
import { CiUser } from 'react-icons/ci';
import * as S from './Navbar.styled';
import SearchInput from './SearchInput';
import MenuList from './MenuList';
import { menuList } from '../constants/menuList';
import logo from '../assets/pikachu_hello.gif';
export default function Navbar() {
  return (
    <div>
      <S.LoginButton>
        <CiUser />
        <p>로그인</p>
      </S.LoginButton>
      <S.LogoBox>
        <S.LogoImage src={logo} />
      </S.LogoBox>
      <S.BottomContainer>
        <MenuList menuList={menuList} />
        <SearchInput />
      </S.BottomContainer>
    </div>
  );
}
