import React from 'react';
import * as S from './Navbar.styled';
import { useNavigate } from 'react-router-dom';

export default function MenuList({ menuList }) {
  const navigate = useNavigate();

  const onMoveCategory = (menu) => {
    navigate(`/?q=""&category=${menu}`);
  };

  return (
    <S.MenuList>
      {menuList.map((menu) => (
        <S.MenuItem onClick={() => onMoveCategory(menu)}>{menu}</S.MenuItem>
      ))}
    </S.MenuList>
  );
}
