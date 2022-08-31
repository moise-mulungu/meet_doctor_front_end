import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReservationsAsync } from '../../../redux/reservations/ReservationList';
import './style.css'

const ListAllReservations = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.reservation.reservations);
  console.log(data);


  useEffect(() => {
    dispatch(fetchReservationsAsync());
  }, []);

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
    </section>
  );
};

export default ListAllReservations;