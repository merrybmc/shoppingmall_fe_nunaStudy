import React from 'react';
import * as S from './SlideBar.styled';
import MenuList from './MenuList';
import LoginContainer from './LoginContainer';
import SearchInput from './SearchInput';

export default function SlideBar({
  authenticate,
  setSlideBarState,
  setCategoryFilter,
  onMovePage,
}) {
  const onCloseSlideBar = () => {
    setSlideBarState(false);
  };
  return (
    <>
      <S.SlideBar>
        <S.CloseButton onClick={onCloseSlideBar} />
        <S.SlideLoginBox>
          <LoginContainer
            authenticate={authenticate}
            onMovePage={onMovePage}
            onCloseSlideBar={onCloseSlideBar}
          />
        </S.SlideLoginBox>
        <S.MenuTitle>Menu</S.MenuTitle>
        <SearchInput onCloseSlideBar={onCloseSlideBar} />
        <MenuList setCategoryFilter={setCategoryFilter} onCloseSlideBar={onCloseSlideBar} />
      </S.SlideBar>
      <S.Overlay onClick={onCloseSlideBar} />
    </>
  );
}
