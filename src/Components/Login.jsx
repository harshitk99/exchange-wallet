import React from 'react'
import { GoogleLogin } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom';

function Login() {
    const nav=useNavigate();

    function responseMessage(e){
        console.log(e);
    }
    function errorMessage(e){
        console.log(e);
    }
  return (
    <div className='flex flex-col justify-center items-center top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2'>
        <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />

    </div>
  )
}

export default Login