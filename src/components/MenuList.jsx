import React from 'react';
import * as S from './Navbar.styled';
import { useNavigate } from 'react-router-dom';

export default function MenuList({ menuList, setCategoryFilter }) {
  const navigate = useNavigate();

  const onMoveCategory = (menu) => {
    setCategoryFilter(menu);
  };

  return (
    <S.MenuList>
      {menuList.map((menu) => (
        <S.MenuItem onClick={() => onMoveCategory(menu)}>{menu}</S.MenuItem>
      ))}
    </S.MenuList>
  );
}
