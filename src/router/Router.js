import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductAll from '../pages/ProductAll';
import Login from '../pages/Login';
import ProductDetail from '../pages/ProductDetail';
import Navbar from '../components/Navbar';

export default function Router() {
  const [authenticate, setAuthenticate] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState('');

  useEffect(() => {
    console.log(authenticate);
  }, [authenticate]);

  return (
    <div>
      <Navbar
        authenticate={authenticate}
        setAuthenticate={setAuthenticate}
        setCategoryFilter={setCategoryFilter}
      />
      <Routes>
        <Route
          path='/'
          element={<ProductAll authenticate={authenticate} categoryFilter={categoryFilter} />}
        />
        <Route path='/login' element={<Login setAuthenticate={setAuthenticate} />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}
