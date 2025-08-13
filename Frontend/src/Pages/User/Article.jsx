import React from 'react'
import Sidebar from "../../Components/Sidebar"
import Topbar from '../../Components/Topbar'
import { Search } from "lucide-react";


const Article = () => {
  return (
    <div className='flex min-h-screen bg-gray-50'>
        <Sidebar/>
        <main className='flex-1 px-4'>
            <Topbar/>
            <div className="bg-white rounded-2xl shadow p-6 relative">
                <h3 className='font-bold '>Articles</h3>
                <p className='text-sm text-[#737373] mb-9'>Search and bookmark your favorite reads </p>
                <div className='relative'>
                     <Search className='absolute w-4 left-3 top-1/2 transform -translate-y-1/2 text-gray-400 '/>
                      <input type="text" placeholder='Search articles...' className='rounded-xl py-2 text-sm px-9 w-[450px] border border-gray-200 '/>
               
                </div>
               

            </div>







        </main>
        

    </div>
  )
}

export default Article