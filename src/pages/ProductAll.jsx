import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import * as S from './ProductAll.styled';
import { useSearchParams } from 'react-router-dom';

export default function ProductAll({ authenticate }) {
  const [productList, setProductList] = useState([]);
  const [query] = useSearchParams();

  const getProducts = async () => {
    let serachQuery = query.get('q') || '';
    let url = `http://localhost:5000/products?q=${serachQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <S.ProductAllContainer>
      {productList.map((menu) => (
        <ProductCard menu={menu} authenticate={authenticate} />
      ))}
    </S.ProductAllContainer>
  );
}
