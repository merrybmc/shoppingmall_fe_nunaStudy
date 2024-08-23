import React from 'react';
import * as S from './ProductCard.styled';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ menu, authenticate }) {
  const navigate = useNavigate();

  const onMoveDetailProduct = (id) => {
    if (authenticate) navigate(`/product/${id}`);
    if (!authenticate) navigate('/login');
  };

  return (
    <S.ProductCardContainer onClick={() => onMoveDetailProduct(menu.id)}>
      <S.ProductImage src={menu?.img} />
      <div>{menu?.title}</div>
      <div>{menu?.price}원</div>
      <div>{menu?.new === true ? '신제품' : ''}</div>
      <div>{menu?.choice === true ? 'concious choice' : ''}</div>
    </S.ProductCardContainer>
  );
}
