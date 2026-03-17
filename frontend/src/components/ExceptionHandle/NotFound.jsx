import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='text-center'>
        <h1 className='text-3xl font-bold'>404</h1>
        <h2 className='text-3xl font-semibold'>Page not found</h2>
        <h2 className='text-slate-600'>Return to the dashboard to continue.</h2>
        <div className='mt-4'>
            <NavLink to={'/feed'} className="bg-slate-200 text-slate-900 p-2 px-6 mt-5 rounded-2xl">Dashboard</NavLink>
        </div>
    </div>
  )
}

export default NotFound