import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/action/authActions';
import AuthUser from '../AuthUser/AuthUsers';

export default function MainPage() {
  const { auth } = useSelector((s) => s);
  const dispath = useDispatch();
  const handlerLogout = () => {
    fetch('http://localhost:3005/logOut', { credentials: 'include' })
      .then((res) => {
        if (res.status === 200) {
          dispath(logout());
        }
      });
  };
  return (
    <div>
      {!auth ? (
        <AuthUser />
      ) : (
        <button onClick={handlerLogout} type="submit">logOut</button>
      )}
    </div>
  );
}
