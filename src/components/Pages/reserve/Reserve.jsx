import React from 'react';
import './style.css';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createReservation } from '../../../redux/reservations/reserve';

const ReservationForm = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.MostRecent);
  const navigate = useNavigate();
  /* eslint-disable */
   const { register, handleSubmit } = useForm();
   /* eslint-disable */
  const onSubmit = (data) => (dispatch(createReservation(data)) ? navigate('/main') : null);
  return (

    
    <div className='body'>

      <div className='R-Form'>
          
          <div className='form  form-group'>
            <h3>Create your appointment</h3>
                
            <form onSubmit={handleSubmit(onSubmit)}>

              {  /* register your input into the hook by invoking the "register" function */}
                <label> Date </label>
                <div className='mb-2'>
                   <input {...register('datetime')} type="date" className='form-control'  />
                  </div>
                  <label> City</label>
                  <div  className='mb-2'>
                   <input {...register('city')} type="text" placeholder="City" className='form-control'/>
                  </div>
                  <label>  Select a Doctor</label>
                  <div  className='mb-2'>
                   <select {...register('doctor_id')} className='form-control'>
                
                   {data.map((doctor) => (
                    <option key={doctor.id} value={doctor.id}>
                        {doctor.name}
                        </option>
                      ))}
                   </select>
                   </div>
                  <div  className='mb-2'>
                   <button className='btn btn-primary btn-block'>Reserve</button>
                  </div>
            </form>
          </div>
       </div>
   </div>
  );
};
export default ReservationForm;
