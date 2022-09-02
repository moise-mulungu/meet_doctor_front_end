import React from 'react';
import './style.css';
// import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createReservation } from '../../../redux/reservations/reserve';
import {useForm} from "react-hook-form";

const ReservationForm = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.MostRecent);
  const navigate = useNavigate();
  /* eslint-disable */
   const { register, handleSubmit } = useForm();
   /* eslint-disable */
  const onSubmit = (data) => (dispatch(createReservation(data)) ? navigate('/reservations') : null);
  return (


    <div className='body'>

      <div className='R-Form'>

          <div className='form  form-group'>
             <h3>Book  your appointment</h3>

                  <form onSubmit={handleSubmit(onSubmit)}>

                        {  /* register your input into the hook by invoking the "register" function */}

                            <lable className="frst-L">Date
                            <lable >City</lable>
                            <lable >Select a doctor</lable>
                            </lable>

                                    <input {...register('datetime')} type="date"  required  />
                                <input {...register('city')} type="text" placeholder="City" className='city' required/>

                                <select {...register('doctor_id')} >

                                  {data.map((doctor) => (
                                  <option key={doctor.id} value={doctor.id}>
                                  {doctor.name}
                                  </option>
                                ))}
                            </select>


                    <button className='btn '>Book Now</button>

                 </form>
             </div>

       </div>
   </div>
  );
};
export default ReservationForm;