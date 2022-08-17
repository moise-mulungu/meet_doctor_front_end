import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../redux/User/user';


const SignupPage = () => {
   const navigate = useNavigate()
   /* eslint-disable */

    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    /* eslint-enable */

     const onSubmit = (data) => (dispatch(registerUser(data)) ? navigate('/log_in') : null) ;
  
  return (
    <div>
        <h1>Sign up</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      
     <input {...register('username')} placeholder="username" />

      <input type="submit" />
    </form>
    </div>
  )
}

export default SignupPage