import React from 'react';
import { CiUser } from 'react-icons/ci';
import * as S from './Navbar.styled';
import SearchInput from './SearchInput';
import MenuList from './MenuList';
import { menuList } from '../constants/menuList';
import logo from '../assets/pikachu_hello.gif';
import { useNavigate } from 'react-router-dom';

export default function Navbar({ authenticate, setAuthenticate }) {
  const navigate = useNavigate();

  const onMovePage = (path) => {
    if (authenticate && path === 'login') {
      setAuthenticate(false);
      navigate('/');
    } else if (!authenticate && path === 'login') {
      navigate('/login');
    } else {
      navigate(path);
    }
  };
  return (
    <div>
      <S.LoginButton onClick={() => onMovePage('/login')}>
        <CiUser />
        <p>{authenticate ? '로그아웃' : '로그인'}</p>
      </S.LoginButton>
      <S.LogoBox
        onClick={() => {
          onMovePage('/');
        }}
      >
        <S.LogoImage src={logo} />
      </S.LogoBox>
      <S.BottomContainer>
        <MenuList menuList={menuList} />
        <SearchInput />
      </S.BottomContainer>
    </div>
  );
}
