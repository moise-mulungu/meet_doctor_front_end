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
                
                   <input {...register('datetime')} type="date" className='form-control'  />
                  
                  <label> City</label>
                  
                   <input {...register('city')} type="text" placeholder="City" className='form-control'/>
                 
                  <label>  Select a Doctor</label>
                 
                   <select {...register('doctor_id')} className='form-control'>
                
                   {data.map((doctor) => (
                    <option key={doctor.id} value={doctor.id}>
                        {doctor.name}
                        </option>
                      ))}
                   </select>
                 
               
                   <button className='btn '>Book</button>
                  
            </form>
          </div>
       </div>
   </div>
  );
};
export default ReservationForm;