import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReservations, fetchReservationsSuccess, fetchReservationsAsync, fetchReservationsFailure, updateReservation} from '../../../redux/reservations/ReservationList';

const ListAllReservations = () => {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { data } = useSelector((state) => state.reservation);
  // const doctor = useSelector((state) => state.MostRecent);
  

  useEffect(() => {
    dispatch(fetchReservationsAsync());
  }, []);

  const handleDelete = (id) => {
    dispatch(updateReservation({ id, status: 'cancelled' }));
  }

  return (
    <section className="reservations-container">
      <h1>Reservations</h1>
      <table className="reservations-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Doctor</th>
            <th>City</th>
            <th>Bill</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {user.data.map((reservation) => (
            <tr key={reservation.id}>
              <td>{reservation.city}</td>
              <td>{reservation.datetime}</td>
              <td>
                <button onClick={() => handleDelete(reservation.id)}>Cancel</button>
              </td>
            </tr>
          ))}
          
        </tbody>
      </table>
      
    </section>
  );
};

export default ListAllReservations;