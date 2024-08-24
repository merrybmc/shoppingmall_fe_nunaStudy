import styled from 'styled-components';

export const LoginButton = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
  height: 24px;
  margin-left: auto;
  gap: 8px;

  background-color: beige;

  cursor: pointer;
`;

export const LogoBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const LogoImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;

  cursor: pointer;
`;

export const MenuList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  gap: 18px;
`;

export const MenuItem = styled.li`
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
`;

export const SearchInput = styled.input`
  border: none;
  margin-left: 6px;
  padding: 4px;
  border-bottom: 1px solid black;
  outline: none;
`;
