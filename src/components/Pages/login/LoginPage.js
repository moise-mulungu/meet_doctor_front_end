import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../../redux/users/user';
import { loadStorage } from '../../../storage/storage';

const HomePageCtn = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;

  .ctn-card {
    width: 50%;
    height: 50%;
    display: flex;
    flex-direction: column;
    border: 1px solid #f9efef;
    margin-top: 100px;
    padding: 10px;
    box-shadow: 5px 10px 18px #888888;
  }
  
  form{
    display: flex;
  }

  .login-title {
    align-self: center;
  }
  
  .username_field{
    height: 40px;
  }
  
  .login-button{
    height: 40px;
    width: 150px;
    margin: auto;
  }
`;

function LoginPage() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [inputValues, setInputValues] = useState({
    username: '',
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (loadStorage()) {
      navigate('/home');
    }
  }, [user]);

  const submitLogin = (e) => {
    e.preventDefault();
    const { username } = inputValues;
    dispatch(loginUser(username));
  };

  const updateInput = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <HomePageCtn>
      <div className="ctn-card">
        <h1 className="login-title">meet_doctor</h1>
        <form onSubmit={submitLogin}>
          <input className="username_field" placeholder="Username" name="username" onChange={updateInput} />
          <input className="login-button" type="submit" value="Login" />
        </form>
      </div>

    </HomePageCtn>
  );
}

export default LoginPage;
