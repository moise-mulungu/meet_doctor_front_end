import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addReservation } from '../../../redux/reservations/reservationActions';

const listAllReservations = () => {
  
  const [reservation, setReservation] = useState({
    doctorId: '',
    city: '',
    datetime: ''
  });

  const dispatch = useDispatch();
  const reservations = useSelector(state => state.reservations);
  const { doctorId, city, datetime } = reservation;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addReservation(doctorId, city, datetime));
  }

  const handleChange = (e) => {
    setReservation({
      ...reservation,
      [e.target.name]: e.target.value
    });
  }

  const submitReservation = (e) => {
    e.preventDefault();
    const newReservation = {
      doctor_d: doctorId,
      city: city,
      datetimes: datetime
    }(addReservation(newReservation));
  }

  const cities = ['New-York', 'Los-Angeles', 'Chicago', 'Houston', 'Philadelphia', 'Phoenix', 'San-Antonio', 'San-Diego', 'Dallas', 'San-Jose', 'Austin', 'Jacksonville', 'Fort-Worth', 'Columbus', 'Charlotte', 'Indianapolis', 'San-Francisco', 'Seattle', 'Denver', 'Washington', 'Boston', 'El-Paso', 'Nashville', 'Detroit', 'Memphis', 'Portland', 'Oklahoma-City', 'Las-Vegas', 'Louisville', 'Baltimore', 'Milwaukee', 'Albuquerque', 'Tucson', 'Fresno', 'Long-Beach', 'Mesa', 'Sacramento', 'Atlanta', 'Kansas-City', 'Mankato', 'Omaha', 'Raleigh', 'Miami', 'Cleveland', 'Virginia-Beach', 'Colorado-Springs', 'Tulsa', 'Oakland', 'Minneapolis', 'Arlington', 'New-Orleans', 'Wichita', 'Pittsburgh', 'Cincinnati', 'Bakersfield', 'Tampa', 'Anaheim', 'Aurora', 'Santa-Ana', 'Riverside', 'Corpus-Christi', 'Lexington', 'St-Louis', 'Stockton', 'Buffalo', 'St-Paul', 'Toledo', 'Greensboro', 'Plano', 'Henderson', 'Fort-Wayne', 'Jersey-City', 'Chula-Vista', 'St-Augustine', 'Glendale', 'Lincoln', 'Orlando', 'Norfolk', 'Durham', 'Madison', 'Laredo', 'Chandler', 'Lubbock', 'Scottsdale', 'Reno', 'Chesapeake', 'Garland', 'Rochester', 'Akron', 'Boise', 'Spokane', 'Des-Moines', 'Modesto', 'Fremont', 'Richmond', 'San-Antonio', 'Montgomery', 'Irvine', 'Yonkers', 'Rochester', 'Birmingham', 'Huntsville', 'Mobile', 'Tacoma', 'Shreveport', 'Amarillo', 'Glendale', 'Akron', 'Augusta', 'Columbus'];
  const datetimes = ['8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM', '10:30 PM', '11:00 PM', '11:30 PM'];


  return (
    <div className="reservations">
      <h1>Reservations</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="doctorId">Doctor ID</label>
          <input type="text" className="form-control" id="doctorId" name="doctorId" value={doctorId} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input type="text" className="form-control" id="city" name="city" value={city} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="datetime">Datetime</label>
          <input type="text" className="form-control" id="datetime" name="datetime" value={datetime} onChange={handleChange} />
        </div>
        
        <button type="submit" onClick={submitReservation} className="btn btn-primary" >Submit</button>
      </form>

    </div>
  );
    
}

export default listAllReservations;
  
