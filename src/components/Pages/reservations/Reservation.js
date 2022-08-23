import React from "react";
import { useDispatch, useSelector } from "react-redux";


const listAllReservations = () => {
  const dispatch = useDispatch();
  const reservations = useSelector(state => state.reservations.reservations);
  const user = useSelector(state => state.auth.user);


  return (
    <div className="Reserve">
      <h1>Reserve</h1>
      <div className="Reserve-list">
        {reservations.map(reservation => (
          <div key={reservation.id}>
            <h2>{reservation.name}</h2>
            <p>{reservation.date}</p>
            <p>{reservation.time}</p>
            <p>{reservation.number}</p>
            <p>{reservation.phone}</p>
            <p>{reservation.email}</p>
            <p>{reservation.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
    
}

export default listAllReservations;
  
