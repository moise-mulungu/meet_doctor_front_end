import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReservations, fetchReservationsSuccess, fetchReservationsAsync, fetchReservationsFailure, updateReservation} from '../../../redux/reservations/ReservationList';
import css from './style.css';
import { useNavigate } from 'react-router-dom'; 

const ListAllReservations = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const data = useSelector((state) => state.reservation.reservations);
  console.log(data);
  

  useEffect(() => {
    dispatch(fetchReservationsAsync());
  }, []);

  const navigate = useNavigate();

  return (
    <section className="reservations-container">
      <h1>All Reservations</h1>
      <table className="reservations-table">
        <thead>
          <tr>
            <th>Doctor</th>
            <th>City</th>
            <th>Bill</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody className="reservations-body">
          {
            data.length !== 0 ? (
              data.map((reservation) => (
                <tr key={reservation.id}>
                  <td>{reservation.doctor.name}</td>
                  <td>{reservation.city}</td>
                  <td>{reservation.doctor.bill}</td>
                  <td>{reservation.datetime}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td>No reservations found</td>
              </tr>
            )
          }         
        </tbody>
      </table>
      <button type="button" onClick={() => navigate('reserve')} className="back-button">Back</button>
    </section>
  );
};

export default ListAllReservations;