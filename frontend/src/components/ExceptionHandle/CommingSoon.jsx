import React from 'react'
import { NavLink } from 'react-router-dom'

const CommingSoon = () => {
  return (
    <div className='flex flex-col justify-start items-center w-full mt-4'>
        <h1 className='text-3xl font-bold'>Feature coming soon</h1>
        <h2 className='text-slate-600'>We are improving the platform — check back soon.</h2>
        <div className='mt-4'>
            <NavLink to={'/feed'} className="bg-slate-200 text-slate-900 p-2 px-6 mt-5 rounded-2xl">Dashboard</NavLink>
        </div>
    </div>
  )
}

export default CommingSoon