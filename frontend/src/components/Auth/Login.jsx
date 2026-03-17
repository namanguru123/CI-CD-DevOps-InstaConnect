import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { logIn } from '../../services/operations/authAPI'
import Loading from '../Loader/Loading'

const Login = () => {
    const navigate=useNavigate();
    const [loading,setLoading]=useState(false);

    const [loginData,setLoginData]=useState({
        userName:"",
        password:""
    });

    const handleSubmit=(e)=>{
        e.preventDefault();
        logIn(loginData,navigate,setLoading);
    }

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setLoginData({
            ...loginData,
            [name]:value,
        })
    }

    if(loading)
        return <Loading/>
  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center gap-6 px-2 bg-slate-50'>
        <div>
            <div className='w-[95vw] sm:w-[400px] border-[1px] p-3 rounded-md border-gray-300 shadow-md'>
                <div className='flex justify-center flex-col items-center p-4'>
                    <h1 className='text-4xl font-bold text-slate-900 mb-2'>JurisConnect</h1>
                    <p className='text-xs text-slate-500'>Secure collaboration for legal professionals</p>
                </div>
                {/* send data from to user routes */}
                <form 
                onSubmit={handleSubmit}
                action="" method='post' className='flex flex-col gap-2'>
                    <input type="text" placeholder='Username or email' name='userName' value={loginData.userName} onChange={handleChange} className='border-[1px] rounded-md p-2 ' />
                    <input type="password" placeholder='Enter your password' name='password' value={loginData.password} onChange={handleChange}  className='border-[1px] rounded-md p-2 ' />
                    <input type="submit" value={"Sign in"} className='w-full bg-slate-900 hover:bg-slate-800 text-white p-2 rounded-md cursor-pointer font-semibold'/>
                </form>
                <div className='text-slate-700 text-sm text-center p-2 pt-3'>
                    <a href="#">Reset your password</a>
                </div>
                
            </div>

            <div className='w-full sm:w-[400px] flex justify-between mt-2 px-5 border-[1px] border-slate-200 rounded-md py-4 bg-white shadow-sm'>
                    <p className='text-slate-700'>New to JurisConnect?</p>
                    <Link to={"/signup"} className='text-slate-900 hover:text-slate-700 font-semibold'>Create account</Link>
            </div>
            <p className='text-center text-xs text-slate-500 mt-4'>Secure collaboration for legal professionals</p>
        </div>

        
        
    </div>
  )
}

export default Login