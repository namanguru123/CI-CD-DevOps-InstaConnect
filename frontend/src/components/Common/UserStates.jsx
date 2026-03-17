import React from 'react'
import { NavLink } from 'react-router-dom'

const UserStates = ({user}) => {
  return (
    <div className='flex gap-5'>
        <p>{`${user?.posts?.length || 0} updates`}</p>
        <NavLink
        className={"text-slate-800 hover:text-slate-600"}
        to={'/search'}
        >{`${user?.followers?.length || 0} connections`}</NavLink>
        <NavLink
        className={"text-slate-800 hover:text-slate-600"}
        to={'/search'}
        >{`${user?.following?.length || 0} network`}</NavLink>
    </div>
  )
}

export default UserStates