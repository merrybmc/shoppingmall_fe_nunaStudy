import React from 'react';
import * as S from './Navbar.styled';
import { CiSearch } from 'react-icons/ci';

export default function SearchInput() {
  return (
    <S.SearchBox>
      <CiSearch />
      <S.SearchInput />
    </S.SearchBox>
  );
}
