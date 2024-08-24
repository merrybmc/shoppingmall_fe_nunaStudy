import styled from 'styled-components';

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  background-color: white;
  border: 1px solid black;
  padding: 4px 16px;

  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
`;
