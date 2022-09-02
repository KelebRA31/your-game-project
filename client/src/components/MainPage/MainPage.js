import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
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
        <div>
          <Button
            variant="contained"
            disableElevation
            onClick={handlerLogout}
            style={{
              display: 'flex',
              justifyСontent: 'center',
            }}
          >
            LOGOUT
          </Button>
        </div>

      )}
    </div>
  );
}
