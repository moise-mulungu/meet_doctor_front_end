import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div>
      <Link to="/">Doctors</Link>
      <Link to="/reserve">Reserve</Link>
      <Link to="/reservations">Add Reservations</Link>
      <Link to="/add_doctor">Add Doctor</Link>
      <Link to="/delete_doctor">Delete Doctor</Link>
    </div>
  );
}

export default Sidebar;
