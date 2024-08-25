import React from 'react';
import * as S from './MenuList.styled';
import { menuList } from '../constants/menuList';

export default function MenuList({ setCategoryFilter, onCloseSlideBar }) {
  const onMoveCategory = (menu) => {
    setCategoryFilter(menu);
    onCloseSlideBar && onCloseSlideBar();
  };

  return (
    <S.MenuList>
      {menuList.map((menu) => (
        <S.MenuItem onClick={() => onMoveCategory(menu)}>{menu}</S.MenuItem>
      ))}
    </S.MenuList>
  );
}
