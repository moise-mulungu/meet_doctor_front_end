import React, { useEffect } from 'react';
import {
  Route, Routes, useNavigate,
} from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from '../../Sidebar';
import AddDoctor from '../add_doctor/AddDoctor';
import Home from '../home/Home';
import Reserve from '../reserve/Reserve';
import Reservations from '../reservations/Reservations';
import DeleteDoctor from '../delete_doctor/DeleteDoctor';
import { loadStorage } from '../../../storage/storage';

const MainPageCtn = styled.div`
  @media (min-width: 768px) {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    
    .right{
      background: var(--little-grey);
      width: calc(100% - 200px);
    }
  }
`;

function MainPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!loadStorage()) {
      navigate('/login');
    }
  }, []);

  return (
    <MainPageCtn>
      <Sidebar />
      <div className="right">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="reserve" element={<Reserve />} />
          <Route path="reservations" element={<Reservations />} />
          <Route path="add_doctor" element={<AddDoctor />} />
          <Route path="delete_doctor" element={<DeleteDoctor />} />
        </Routes>
      </div>
    </MainPageCtn>
  );
}

export default MainPage;
