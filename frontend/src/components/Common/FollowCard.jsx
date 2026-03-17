import React, { useState } from 'react'
import { followUser } from '../../services/operations/userAPI'

const FollowCard = ({ user, choice }) => {
  const token = localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null;
  const [connectionStatus, setConnectionStatus] = useState("Connect");
  const followHandler = async ({ heroId }) => {
    if (connectionStatus === "Connect") setConnectionStatus("Connected");
    else setConnectionStatus("Connect");
    await followUser(heroId, token);
  }

  return (
    <div className='w-[280px] flex justify-between items-center gap-2'>
        <div className='flex gap-2 items-center'>
            <img src={user?.image} alt="" className='w-[48px] h-[48px] rounded-full border-[1px] border-gray-400'/>
            <div>
                <h1 className='font-semibold text-sm'>{user?.fullName}</h1>
                <h2 className='text-sm'>{user?.userName}</h2>
            </div>
        </div>
        
        <button
          onClick={() => followHandler({ heroId: user?._id })}
          className='text-slate-900 text-sm font-semibold'
        >
          {choice === "unfollow" ? "Disconnect" : choice === "follow" ? "Connect" : choice === "follower" ? "" : connectionStatus}
        </button>
    </div>
  )
}

export default FollowCard