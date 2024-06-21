import React from 'react'
import { MdHome, MdLibraryBooks } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import { IoLogOutOutline } from "react-icons/io5";



const Sidebar = () => {

    const location = useLocation();

    const isHome = location.pathname === '/';
    const isRecords = location.pathname === '/records';

  return (
    <div className='flex flex-col bg-gray-50 h-screen w-48 shrink-0 justify-between overflow-y-scrikk min-w-210 hide-scrollbar rounded-b-xl' >
      {/* Top Elements */}
      <div className="">
        <div className='font-bold pl-5 pt-2 mb-5 font-inter' >Surveillance X</div>
        <div className="flex flex-col pl-5">
          <Link to='/' >
              <div className={`flex items-center my-1 mr-2 rounded-md h-8 cursor-pointer ${ isHome ? 'bg-blue-500' : ''}`}>
                  <MdHome color={`${ isHome ? 'white' : 'gray' }`} className='m-1' />
                  <div className={`font-inter font-medium ${ isHome ? 'text-white' : 'text-gray-400' } `} > Dashboard</div>
              </div>
          </Link>
          <Link to='/records' >
              <div className={`flex items-center my-1 mr-2 rounded-md h-8 cursor-pointer ${ isRecords ? 'bg-blue-500' : ''}`}>
                  <MdLibraryBooks color={`${ isRecords ? 'white' : 'gray' }`} className='m-1' />
                  <div className={`font-inter font-medium ${ isRecords ? 'text-white' : 'text-gray-400' } `} > Records</div>
              </div>
          </Link>
        </div>
      </div>
      {/* Bottom Elements */}
      <Link to='/login' >
      <div className="pl-5 pt-2 flex items-center my-1 mr-2 rounded-md h-8 cursor-pointer">
        <IoLogOutOutline color='gray' className='m-1' />
        <div className={`font-inter font-medium text-gray-400 `} >Logout</div>
      </div>
      </Link>
    </div>
  )
}

export default Sidebar
