import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import { setAuth } from './redux/action/authActions';

function App() {
  const dispath = useDispatch();

  useEffect(() => {
    fetch('http://localhost:3005/users', {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((res) => {
        dispath(setAuth(res));
      }, []);
  });

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}

export default App;
