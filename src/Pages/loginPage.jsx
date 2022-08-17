import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../redux/User/user';


const SignupPage = () => {
   const navigate = useNavigate()
   /* eslint-disable */

    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    /* eslint-enable */

     const onSubmit = (data) => (dispatch(loginUser(data)) ? navigate('/main') : null ) ;
  
  return (
    <div>
    <h1>Login </h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
     <input {...register('username')} placeholder="username" />

      <input type="submit" name="Loing" />
    </form>
    </div>
  )
}

export default SignupPage