import React from 'react'
import Logo from "../assets/logo.png";
import { LayoutDashboardIcon, Book, Paperclip, FileQuestion, IdCard, Settings, Menu, Bell, ChevronDown } from "lucide-react";
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <aside className="w-64 overflow-y-hidden bg-[#fafafa] border-l border-gray-400 shadow p-4 flex flex-col justify-between">
        <div>
          <div className='flex items-center  space-x-2 mb-6'>
            <div className='flex-shrink-0'>
              <img src={Logo} className='w-10 h-10 rounded-sm '/>
            </div>
            <div className='ml-4 flex-grow'>
              <h1 className='font-bold'>Nova</h1>
              <p className='text-sm text-gray-600 '>Health Consultancy</p>
            </div>
            <Menu className='w-5'/>
          </div>

          <div>
            <p className='text-sm text-gray-600 font-semibold mb-3'>Overview</p>
            <div className='rounded-lg bg-[#f5f5f5] flex items-center px-3 py-1'>
                <LayoutDashboardIcon className='w-4 h-4'/>
                <p className='text-sm ml-2 '> Dashboard</p>
            </div>
          </div>
          <div className='flex items-center justify-center my-4'>
            <hr className="border-t border-gray-300 w-full max-w-md"/>
          </div>
          <div>
            <p className='text-sm text-gray-600 font-semibold mb-3'>My Access</p>
            <Link>
              <button className='rounded-[5px] mb-1  w-full py-1 px-3 flex items-center hover:bg-gray-100 transition'>
              <Book className='w-4'/>
              <span className='ml-3 text-sm'>Study Materials</span>
            </button>
            </Link>
             <Link>
              <button className='rounded-[5px] mb-1  w-full py-1 px-3 flex items-center hover:bg-gray-100 transition'>
              <Paperclip className='w-4'/>
              <span className='ml-3 text-sm'>Articles</span>
            </button>
            </Link>
             <Link>
              <button className='rounded-[5px] mb-1  w-full py-1 px-3 flex items-center hover:bg-gray-100 transition'>
              <FileQuestion className='w-4'/>
              <span className='ml-3 text-sm'>Exam Questions</span>
            </button>
            </Link>
             
            </div>
            <div className='flex items-center justify-center my-4'>
            <hr className="border-t border-gray-300 w-full max-w-md"/>
          </div>
            <div>
               <p className='text-sm text-gray-600 font-semibold mb-3'>Account</p>
            <Link>
              <button className='rounded-[5px] mb-1 w-full py-1 px-3 flex items-center hover:bg-gray-100 transition'>
              <IdCard className='w-4'/>
              <span className='ml-3 text-sm'>Subscription & Payment</span>
            </button>
            </Link>
             <Link>
              <button className='rounded-[5px]  w-full py-1 px-3 flex items-center hover:bg-gray-100 transition'>
              <Settings className='w-4'/>
              <span className='ml-3 text-sm'>Profile Settings</span>
            </button>
            </Link>
           
            </div>

            


        


         
        </div>
        
      </aside>
  )
}

export default Sidebar