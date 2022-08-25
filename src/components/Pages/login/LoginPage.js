import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../../redux/users/user';
import { loadStorage } from '../../../storage/storage';
import logImgDoc from '../../../images/img_doc_login.jpg';

const HomePageCtn = styled.div`
  @media (min-width: 768px) {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;

    .ctn-card {
      width: fit-content;
      height: fit-content;
      display: flex;
      flex-direction: row;
      align-self: center;
      border: 1px solid #f9efef;
      margin-top: 50px;
      padding: 10px;
      border-radius: 5px;
      box-shadow: 5px 5px 75px rgba(136, 136, 136, 0.61);
    }

    .form_ctn {
      width: 300px;
      padding-left: 30px;
      padding-right: 50px;
    }

    .doctor_log_img {
      width: 150px;
    }

    .login_txt {
      text-align: center;
      font-size: 1.5rem;
      color: var(--text-black);
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 100px;
    }

    label {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    .doctor_log_img {
      width: 400px;
    }

    .login-title {
      align-self: center;
      color: var(--green);
      font-size: 2rem;
      font-style: italic;
    }

    .username_field {
      height: 50px;
      padding: 12px 20px;
      margin: 8px 0;
      display: inline-block;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
    }

    .login-button {
      background-color: var(--green);
      color: white;
      padding: 14px 20px;
      margin: 8px 0;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: all 300ms linear 0s;
    }

    .login-button:hover {
      background-color: var(--green-darker);
    }
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
      navigate('/');
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
      <h1 className="login-title">meet_doctor</h1>
      <div className="ctn-card">
        <img className="doctor_log_img" src={logImgDoc} alt="login_doctor_picture" />
        <div className="form_ctn">
          <h5 className="login_txt">Log in</h5>
          <form onSubmit={submitLogin}>
            <label htmlFor="username">
              Username:
              <input className="username_field" id="username" placeholder="Username" name="username" onChange={updateInput} />
            </label>
            <input className="login-button" type="submit" value="Login" />
          </form>
        </div>
      </div>

    </HomePageCtn>
  );
}

export default LoginPage;
