import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductAll from '../pages/ProductAll';
import Login from '../pages/Login';
import ProductDetail from '../pages/ProductDetail';
import Navbar from '../components/Navbar';

export default function Router() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<ProductAll />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product/:id' element={<ProductDetail />} />
      </Routes>
    </div>
  );
}
