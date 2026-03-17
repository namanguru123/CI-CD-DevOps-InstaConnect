import React from 'react'
import { FaBalanceScale, FaGavel, FaComments } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { setCreatePost } from '../../slices/createPostSllce';
import { NavLink } from 'react-router-dom'

const TopNav = () => {
  const dispatch = useDispatch();
  return (
    <div className='flex justify-between items-center py-3 px-4 border-b border-slate-200 sticky top-0 bg-white shadow-sm'>
      <div>
        <h1 className='text-2xl font-bold text-slate-900 flex items-center gap-2'>
          <FaBalanceScale className='text-amber-500' />
          JurisConnect
        </h1>
        <p className='text-xs text-slate-500'>Professional legal network</p>
      </div>

      <div className='text-3xl flex gap-4 text-slate-700'>
        <button
          onClick={() => dispatch(setCreatePost(true))}
          className='p-2 rounded-full hover:bg-slate-100'
          aria-label='Share insight'
        >
          <FaGavel />
        </button>

        <NavLink
          to={'/message'}
          className='p-2 rounded-full hover:bg-slate-100'
          aria-label='Messages'
        >
          <FaComments />
        </NavLink>
      </div>
    </div>
  )
}

export default TopNav