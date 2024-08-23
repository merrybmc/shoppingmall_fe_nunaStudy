import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({ setAuthenticate }) {
  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    setAuthenticate(true);
    navigate('/');
  };
  return (
    <div>
      <form onSubmit={(e) => loginUser(e)}>
        <div>
          <div>Email</div>
          <input />
        </div>
        <div>
          <div>Password</div>
          <input />
        </div>
        <button>로그인</button>
      </form>
    </div>
  );
}
