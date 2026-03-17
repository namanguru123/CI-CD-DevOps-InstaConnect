import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signUp } from '../../services/operations/authAPI'

const Signup = () => {
    const navigate=useNavigate();
    const [loading,setLoading]=useState(false);

    const [signUpData,setSignUpData]=useState({
        userName:"",
        fullName:"",
        email:"",
        password:"",
    })

    const handleSubmit=(e)=>{
        e.preventDefault();
        signUp(signUpData,navigate,setLoading);
    }

    const handleDataChange=(e)=>{
        const {name,value}=e.target;
        setSignUpData({
           ...signUpData,
           [name]:value
        })
    }

  return (
    <div className='w-[100vw] h-[100vh] flex flex-col justify-center items-center px-2 bg-zinc-100'>       
        <div className='w-full sm:w-[400px] border-[1px] p-3 rounded-md border-gray-300 shadow-md'>
            <div className='flex justify-center flex-col items-center p-4'>
                <h1 className='text-4xl font-bold text-slate-900 mb-2'>JurisConnect</h1>
                <p className='text-center text-slate-700 font-medium text-sm'>Create your professional profile and connect with legal peers.</p>
            </div>
            {/* send data from to user routes */}
            <form 
            onSubmit={handleSubmit}
            action="" method='post' className='flex flex-col gap-2'>
                <input type="text" placeholder='Username or email' name='userName' value={signUpData.userName} onChange={handleDataChange} className='border-[1px] rounded-md p-2 ' />
                <input type="text" placeholder='Full name' name='fullName' value={signUpData.fullName} onChange={handleDataChange} className='border-[1px] rounded-md p-2 ' />
                <input type="email" placeholder='Work email' name='email' value={signUpData.email} onChange={handleDataChange} className='border-[1px] rounded-md p-2 ' />
                <input type="password" placeholder='Create a password' name='password' value={signUpData.password} onChange={handleDataChange} className='border-[1px] rounded-md p-2 ' />
                <div className='p-2 text-center text-sm'>
                    <p>By creating an account, you agree to our <a href="#" className='text-slate-900 hover:underline'>Terms</a>, <a href="#" className='text-slate-900 hover:underline'>Privacy Policy</a> and <a href="#" className='text-slate-900 hover:underline'>Cookies Policy</a>.</p>
                </div>
                <input type="submit" value={"Create Account"} className='w-full bg-slate-900 hover:bg-slate-800 text-white p-2 rounded-md cursor-pointer font-semibold'/>
            </form>
        </div>

        <div className='w-full sm:w-[400px] flex justify-between mt-2 px-5 border-[1px] border-slate-200 rounded-md py-4 bg-white shadow-sm'>
                <p className='text-slate-700'>Already have an account?</p>
                <Link to={"/"} className='text-slate-900 hover:text-slate-700 font-semibold'>Sign in</Link>
        </div>
        <p className='text-center text-xs text-slate-500 mt-4'>Secure collaboration for legal professionals</p>
    </div>
  )
}

export default Signup