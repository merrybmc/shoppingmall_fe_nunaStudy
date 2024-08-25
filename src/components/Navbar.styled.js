import styled from 'styled-components';

export const TopContainer = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  height: fit-content;
  margin-left: auto;
  margin-top: 20px;
  margin-right: 35px;

  cursor: pointer;
`;

export const LoginButton = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
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
