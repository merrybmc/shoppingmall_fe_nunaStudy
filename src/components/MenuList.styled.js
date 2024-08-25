import styled from 'styled-components';

export const MenuList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  gap: 18px;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    padding-left: 24px;
    gap: 8px;
  }
`;

export const MenuItem = styled.li`
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
