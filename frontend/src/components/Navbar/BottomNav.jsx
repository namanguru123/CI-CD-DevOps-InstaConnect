import React from 'react'
import { FaHome, FaSearch, FaBalanceScale, FaEnvelope, FaUserCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const BottomNav = () => {
  const navigate=useNavigate();
  return (
    <div className='text-3xl flex sm:hidden justify-between items-center mt-2 pt-2 pb-3 -mx-1 px-2 sticky bottom-0 bg-white border-t border-slate-200'>
        <FaHome onClick={()=>navigate("/feed")}/>
        <FaSearch onClick={()=>navigate("/search")}/>
        <FaBalanceScale onClick={()=>navigate("/reels")}/>
        <FaEnvelope onClick={()=>navigate("/message")}/>
        <FaUserCircle onClick={()=>navigate("/user")}/>
    </div>
  )
}

export default BottomNav