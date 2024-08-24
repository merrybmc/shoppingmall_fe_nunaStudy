import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import * as S from './ProductAll.styled';
import { useSearchParams } from 'react-router-dom';

export default function ProductAll({ authenticate, categoryFilter }) {
  const [productList, setProductList] = useState([]);
  const [query] = useSearchParams();

  const getProducts = async () => {
    let serachQuery = query.get('q') || '';
    let url = `https://my-json-server.typicode.com/merrybmc/shoppingmall_fe_nunaStudy/products/?q=${serachQuery}`;
    let response = await fetch(url);
    let data = await response.json();

    if (categoryFilter) {
      data = await data.filter((item) => {
        console.log(item.category);
        return item.category === categoryFilter;
      });

      console.log(data);
    }

    setProductList(data);
    console.log(data);
  };

  useEffect(() => {
    getProducts();
  }, [query, categoryFilter]);

  return (
    <S.ProductAllContainer>
      {productList.map((menu) => (
        <ProductCard menu={menu} authenticate={authenticate} />
      ))}
    </S.ProductAllContainer>
  );
}
