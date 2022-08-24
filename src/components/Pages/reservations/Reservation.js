import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReservations, fetchReservationsSuccess, fetchReservationsAsync, fetchReservationsFailure, updateReservation} from '../../../redux/reservations/ReservationList';
import css from './style.css';

const ListAllReservations = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const data = useSelector((state) => state.reservation.reservations);
  console.log(data.reservations);
  // const doctor = useSelector((state) => state.MostRecent);
  

  useEffect(() => {
    dispatch(fetchReservationsAsync());
  }, []);

  const handleDelete = (id) => {
    dispatch(updateReservation({ id, status: 'cancelled' }));
  }


  return (
    <section className="reservations-container">
      <h1>All Reservations</h1>
      <table className="reservations-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Bill</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="reservations-body">
          {
            data.length !== 0 ? (
              data.map((reservation) => (
                <tr key={reservation.id}>
                  <td>{reservation.doctor}</td>
                  <td>{reservation.city}</td>
                  <td>{reservation.bill}</td>
                  <td>{reservation.datetime}</td>
                  <td>
                    <button onClick={() => handleDelete(reservation.id)} className="delete-btn">Delete</button>
                  </td>
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