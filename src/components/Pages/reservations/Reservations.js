import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { setReservation } from '../../actions/reservationActions';


const Reservations = () => {
  
  const [reservation, setReservation] = useState({
    city: '',
    datetime: ''
  });

  const dispatch = useDispatch();
  const { city, datetime } = reservation;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setReservation(city, datetime));
  }

  const handleChange = (e) => {
    setReservation({
      ...reservation,
      [e.target.name]: e.target.value
    });
  }

  const cities = ['New York', 'Paris', 'London', 'Tokyo', 'Rome', 'Lome', 'Kinshasa', 'Kabul'];
  const datetimes = ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];

  return (
    <div className="reservations">
      <h1>Reservations</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <select name="city" value={city} onChange={handleChange} className="form-control">
            {cities.map(city => <option key={city}>{city}</option>)}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="datetime">Datetime</label>
          <select name="datetime" value={datetime} onChange={handleChange} className="form-control">
            {datetimes.map(datetime => <option key={datetime}>{datetime}</option>)}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );

}

export default Reservations;
