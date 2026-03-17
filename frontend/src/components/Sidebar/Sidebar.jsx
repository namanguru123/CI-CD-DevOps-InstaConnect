import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GoHome } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { FaBalanceScale, FaRegFileAlt, FaEnvelope, FaPlusCircle, FaUserCircle } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { logout } from '../../services/operations/authAPI';
import { useDispatch} from 'react-redux';
import { setCreatePost } from '../../slices/createPostSllce';

const Sidebar = () => {
    const dispatch=useDispatch();

    const menus=[
        {
            title:"Home",
            element:<GoHome/>,
            route:"/feed"
        },
        {
            title:"Search",
            element:<CiSearch/>,
            route:"/search",
        },
        {
            title:"Cases",
            element:<FaBalanceScale/>,
            route:"/feed",
        },
        {
            title:"Briefs",
            element:<FaRegFileAlt/>,
            route:"/reels"
        },
        {
            title:"Messages",
            element:<FaEnvelope />,
            route:"/message"
        },
        {
            title:"Share",
            element:<FaPlusCircle />
        },
        {
            title:"Profile",
            element:<FaUserCircle />,
            route:"/user"
        },
    ]
    const navigate=useNavigate();
    const [select,setSelect]=useState("Home");

    const createPostBtnHandle = (elem) => {
        if (elem.title === "Create") {
            setSelect(elem.title)
            dispatch(setCreatePost(true));
        } else {
            setSelect(elem.title);
            navigate(elem.route);
            dispatch(setCreatePost(false))
        }
    }
    
  return (
    <>
        <div className='w-[250px] h-[100vh] border border-slate-200 sticky top-0 pl-3 flex flex-col justify-between py-4 font-sans bg-white'>
            <div className='mt-4 ml-2'>
                <h1 className='text-3xl font-bold text-slate-900 flex items-center gap-2'>
                    <FaBalanceScale className='text-amber-500' />
                    JurisConnect
                </h1>
                <p className='text-xs text-slate-500 mt-1'>A professional network for legal teams</p>
            </div>

            <div className='flex-1 flex flex-col gap-2 p-1 pr-5 mt-6'>
                {
                    menus.map((elem,ind)=>{      
                        return (
                            <div 
                            onClick={()=>createPostBtnHandle(elem)}
                            className={`${select===elem.title ? "bg-slate-100 text-slate-900" : "bg-transparent"} text-2xl flex gap-4 items-center hover:bg-slate-50 cursor-pointer p-2 rounded-lg transition-all`}
                             key={ind} >
                                {
                                    elem.element
                                }
                                <p className='text-[15px]'>{elem.title}</p>
                            </div>
                        )
                    })
                }        
            </div>

            {/* thread and more */}
            <div className='flex flex-col gap-6'>
                <div className='text-3xl flex gap-2 items-center '>
                    <RxHamburgerMenu/>
                    <p className='text-lg'>More</p>
                </div>
                <div className='w-full flex justify-center '>
                    <p
                    onClick={()=>logout(navigate)}
                    className='bg-slate-800 hover:bg-slate-900 font-semibold py-2 px-8 cursor-pointer rounded-2xl text-white'>
                        Sign out
                    </p>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Sidebar