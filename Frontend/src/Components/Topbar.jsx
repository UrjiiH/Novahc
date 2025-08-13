import React from 'react'
import {Bell, ChevronDown} from "lucide-react";
import Avatar from '../assets/avatar.png';

const Topbar = () => {
  return (
    <div className=" sticky top-0 z-50 w-full bg-white backdrop-blur-lg border-b border-gray-200  flex justify-end mb-6 px-4 py-2 ">
          <div className='flex items-center mr-4 rounded-lg bg-white px-3 hover:bg-gray-200 transition '>
            <Bell className='w-5'/>
          </div>
          <button className='rounded-xl bg-whitr border border-gray-200 px-3 py-1 flex items-center justify-between space-x-2'>
              <img src={Avatar} className='w-8 h-8 rounded-2xl'/>
    
              <ChevronDown className='w-4'/>
          </button>
        </div>
  )
}

export default Topbar