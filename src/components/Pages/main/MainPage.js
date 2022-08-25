import React, { useEffect } from 'react';
import {
  Route, Routes, useNavigate,
} from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import Sidebar from '../../Sidebar';
import AddDoctor from '../add_doctor/AddDoctor';
import Home from '../home/Home';
import Reservations from '../reservations/Reservations';
import ReservationForm from '../reserve/Reserve';
import DeleteDoctor from '../delete_doctor/DeleteDoctor';
import { loadStorage } from '../../../storage/storage';
import { fetchDoctors } from '../../../redux/doctors/DoctorList';

const MainPageCtn = styled.div`
  @media (min-width: 768px) {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    
    .right{
      background: var(--little-grey);
      position: relative;
      width: calc(100% - 200px);
      height: 100%;
    }
  }
`;

function MainPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!loadStorage()) {
      navigate('/login');
    }
    dispatch(fetchDoctors());
  }, []);

  return (
    <MainPageCtn>
      <Sidebar />
      <div className="right">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="reserve" element={<ReservationForm />} />
          <Route path="reservations" element={<Reservations />} />
          <Route path="add_doctor" element={<AddDoctor />} />
          <Route path="delete_doctor" element={<DeleteDoctor />} />
        </Routes>
      </div>
    </MainPageCtn>
  );
}

export default MainPage;
