import React, { useEffect } from 'react';
import {
  Route, Routes, useNavigate,
} from 'react-router-dom';
import Sidebar from '../../Sidebar';
import AddDoctor from '../add_doctor/AddDoctor';
import Home from '../home/Home';
import Reserve from '../reserve/Reserve';
import Reservations from '../reservations/Reservations';
import DeleteDoctor from '../delete_doctor/DeleteDoctor';
import { loadStorage } from '../../../storage/storage';

function MainPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!loadStorage()) {
      navigate('/login');
    }
  }, []);

  return (
    <div>
      <Sidebar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="reserve" element={<Reserve />} />
          <Route path="reservations" element={<Reservations />} />
          <Route path="add_doctor" element={<AddDoctor />} />
          <Route path="delete_doctor" element={<DeleteDoctor />} />
        </Routes>
      </div>
    </div>
  );
}

export default MainPage;
