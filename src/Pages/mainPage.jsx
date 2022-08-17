import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'
const MainPage = () => {

     /* eslint-disable */
     const navigate = useNavigate()
    
     const {  handleSubmit } = useForm();
     /* eslint-enable */
 
      const onSubmit = () => (navigate('/log_in') ) ;
  return (
    <div>
        <button onClick={handleSubmit(onSubmit)}> Logout</button>
    </div>
  )
}

export default MainPage