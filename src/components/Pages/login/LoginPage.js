import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { loginUser } from '../../../redux/users/user';

const HomePageCtn = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  background: blueviolet;
`;

function LoginPage() {
  const dispatch = useDispatch();
  return (
    <HomePageCtn>
      <div className="ctn-card">
        <h1 className="text-3xl font-bold underline">meet_doctor</h1>
        <input className="username_field" />
        <button
          type="button"
          className="microphone"
          label="microphone"
          onClick={() => dispatch(loginUser())}
        >
          login user
        </button>
      </div>

    </HomePageCtn>
  );
}

export default LoginPage;
