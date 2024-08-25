import styled from 'styled-components';
import { IoCloseSharp } from 'react-icons/io5';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
  z-index: 10;
`;

export const SlideBar = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 35%;
  height: 100vh;
  top: 0;
  right: 0;
  padding: 14px;
  background-color: white;
  z-index: 11;
`;

export const CloseButton = styled(IoCloseSharp)`
  cursor: pointer;
  margin-left: auto;
  font-size: 24px;
`;

export const MenuTitle = styled.h2`
  padding-left: 24px;
`;

export const SlideLoginBox = styled.div`
  padding-left: 24px;
`;
