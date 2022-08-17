import React from 'react';
import { Component } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/loginPage';
//import Registration from './Pages/Registrations';
import SignupPage from './Pages/signupPage';
import MainPage from './Pages/mainPage';


export default class App extends Component{
 
  render(){
  return (
    <Router>
      <Routes>
        <Route path="/log_in" element={<LoginPage />} />
        <Route path="/sign_up" element={<SignupPage />} />
        <Route path="/main" element={<MainPage />} />
     
        </Routes>
    </Router>
  );
  }
};
