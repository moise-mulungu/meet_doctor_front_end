
import React from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/User/user';

const HomePage = () => {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button
        type="button"
        className="microphone"
        label="microphone"
        onClick={() => dispatch(loginUser())}
      >
        login user
      </button>
    </div>
  );
};

export default HomePage;