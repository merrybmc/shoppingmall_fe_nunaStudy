import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './ProductDetail.styled';

export default function ProductDetail() {
  const [product, setProduct] = useState();
  const { id } = useParams();

  const getProductDetail = async () => {
    const url = `https://my-json-server.typicode.com/merrybmc/shoppingmall_fe_nunaStudy/products/${id}`;

    const response = await fetch(url);
    const data = await response.json();
    setProduct(data);

    console.log(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <S.DetailContainer>
      <S.ProductImage src={product?.img} />
      <S.DesBox>
        <S.Title>{product?.title}</S.Title>
        <hr />
        <div>{product?.price}원</div>
        <div>{product?.new === true ? '신제품' : ''}</div>
        <div>{product?.choice === true ? 'concious choice' : ''}</div>
      </S.DesBox>
    </S.DetailContainer>
  );
}
