import React from 'react';
import * as S from './Navbar.styled';

export default function MenuList({ menuList }) {
  return (
    <S.MenuList>
      {menuList.map((menu) => (
        <S.MenuItem>{menu}</S.MenuItem>
      ))}
    </S.MenuList>
  );
}
