import styled from 'styled-components';

export const DetailContainer = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: center;

  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 24px;
    gap: 8px;
  }
`;

export const ProductImage = styled.img`
  width: 400px;
  height: 600px;
`;

export const DesBox = styled.div``;

export const Title = styled.h1``;
