import React, { useEffect, useState } from 'react';

import * as S from './Navbar.styled';
import SearchInput from './SearchInput';
import MenuList from './MenuList';
import logo from '../assets/pikachu_hello.gif';
import { useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import LoginContainer from './LoginContainer';

export default function Navbar({ authenticate, setCategoryFilter, setSlideBarState, onMovePage }) {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <>
      <S.TopContainer>
        {isMobile ? (
          <GiHamburgerMenu onClick={() => setSlideBarState(true)} />
        ) : (
          <LoginContainer onMovePage={onMovePage} authenticate={authenticate} />
        )}
      </S.TopContainer>
      <S.LogoBox
        onClick={() => {
          onMovePage('/');
        }}
      >
        <S.LogoImage src={logo} />
      </S.LogoBox>
      {isMobile ? (
        ''
      ) : (
        <S.BottomContainer>
          <MenuList setCategoryFilter={setCategoryFilter} />
          <SearchInput />
        </S.BottomContainer>
      )}
    </>
  );
}
