import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginPage from './components/Pages/login/LoginPage';
import MainPage from './components/Pages/main/MainPage';
import ReservationForm from './components/Pages/reserve/Reserve';
import { fetchDoctors } from './redux/doctors/DoctorList';

import './App.css';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDoctors());
  }, []);

  return (

    <Router>
      <Routes>
        <Route exact path="login" element={<LoginPage />} />
        <Route path="/reserve" element={<ReservationForm />} />

        <Route path="*" element={<MainPage />} />
      </Routes>
    </Router>
  );
};

export default App;
