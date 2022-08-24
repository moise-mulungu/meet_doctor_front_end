import React, { useEffect } from 'react';
import {
  Route, Routes, useNavigate,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Sidebar from '../../Sidebar';
import AddDoctor from '../add_doctor/AddDoctor';
import Home from '../home/Home';
<<<<<<< HEAD
import Reserve from '../reserve/Reserve';
import ListAllReservations from '../reservations/Reservation';
=======
import Reservations from '../reservations/Reservations';
import ReservationForm from '../reserve/Reserve';
>>>>>>> 73f34e478f1f37b44df759b4569fa96c2c198619
import DeleteDoctor from '../delete_doctor/DeleteDoctor';
import { loadStorage } from '../../../storage/storage';
import { fetchDoctors } from '../../../redux/doctors/DoctorList';

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
    <div>
      <Sidebar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="reserve" element={<Reserve />} />
          <Route path="reserve" element={<ReservationForm />} />
          <Route path="reservations" element={<Reservations />} />
          <Route path="reservations" element={<ListAllReservations />} />
          <Route path="add_doctor" element={<AddDoctor />} />
          <Route path="delete_doctor" element={<DeleteDoctor />} />
        </Routes>
      </div>
    </div>
  );
}

export default MainPage;
