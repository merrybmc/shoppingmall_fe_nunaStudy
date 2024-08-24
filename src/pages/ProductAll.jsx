import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import * as S from './ProductAll.styled';
import { useSearchParams } from 'react-router-dom';

export default function ProductAll({ authenticate }) {
  const [productList, setProductList] = useState([]);
  const [query] = useSearchParams();

  const getProducts = async () => {
    let serachQuery = query.get('q') || '';
    let categoryQuery = query.get('category') || '';

    console.log(categoryQuery);
    let url = `https://my-json-server.typicode.com/merrybmc/shoppingmall_fe_nunaStudy/products/?q=${serachQuery}&category=${categoryQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
    console.log(data);
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
