import React from 'react';
import * as S from './Navbar.styled';
import { CiSearch } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';

export default function SearchInput({ onCloseSlideBar }) {
  const navigate = useNavigate();

  const search = (e) => {
    if (e.key === 'Enter') {
      let keyword = e.target.value;

      navigate(`/?q=${keyword}`);

      onCloseSlideBar && onCloseSlideBar();
    }
  };

  return (
    <S.SearchBox>
      <CiSearch />
      <S.SearchInput
        type='text'
        onKeyDown={(e) => {
          search(e);
        }}
      />
    </S.SearchBox>
  );
}
