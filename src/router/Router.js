import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ProductAll from '../pages/ProductAll';
import Login from '../pages/Login';
import ProductDetail from '../pages/ProductDetail';
import Navbar from '../components/Navbar';
import SlideBar from '../components/SlideBar';

export default function Router() {
  const [authenticate, setAuthenticate] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [SlideBarState, setSlideBarState] = useState(false);
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const onMovePage = (path) => {
    if (authenticate && path === '/login') {
      setAuthenticate(false);
      navigate('/');
    } else if (!authenticate && path === '/login') {
      navigate('/login');
    } else {
      navigate(path);
      setCategoryFilter('');
    }
  };

  return (
    <div>
      {SlideBarState && isMobile && (
        <SlideBar
          authenticate={authenticate}
          setSlideBarState={setSlideBarState}
          setCategoryFilter={setCategoryFilter}
          onMovePage={onMovePage}
        />
      )}
      <Navbar
        authenticate={authenticate}
        setAuthenticate={setAuthenticate}
        setCategoryFilter={setCategoryFilter}
        setSlideBarState={setSlideBarState}
        onMovePage={onMovePage}
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
