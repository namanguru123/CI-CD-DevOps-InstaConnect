import React from 'react'
import logo from "../assests/text_logo.png"
import { GoPlusCircle } from "react-icons/go";
import { FaFacebookMessenger } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { setCreatePost } from '../../slices/createPostSllce';
import {NavLink} from 'react-router-dom'

const TopNav = () => {
  const dispatch=useDispatch();
  return (
    <>
        <div className='flex justify-between items-center py-3 px-4 border-b-[1px] border-gray-300 sticky top-0 bg-white shadow-sm'>
            <div>
                <h1 className='text-2xl font-bold text-purple-700'>InstaConnect</h1>
                <p className='text-xs text-gray-500'>Connect with friends</p>
            </div>
            <div className='text-3xl flex gap-4'>
              <button onClick={()=>dispatch(setCreatePost(true))}>
                <GoPlusCircle/>
              </button>
              <NavLink to={"/message"}>
                <FaFacebookMessenger/>
              </NavLink>
                
              
              
            </div>
        </div>
    </>
  )
}

export default TopNav