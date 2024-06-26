import React from 'react'
import Sidebar from '../components/Sidebar'
import FilterButtons from '../components/FilterButtons'
import MainCam from '../components/MainCam'
import CamCard from '../components/CamCard'

import video from '../assets/vid1.mp4';

const Records = () => {
  return (
    <div className='flex flex-row' >
      <Sidebar />
      <div className="flex flex-col h-screen w-screen">
        <div className="font-inter text-xl font-semibold h-12 w-screen pl-4 flex items-center bg-white">Records</div>
        <div className="font-lato ml-4 m-2">Filter</div>
        <FilterButtons />
        <MainCam src={video} />
        <div className="flex flex-row ">
            <CamCard src={video} number={1} />
            <CamCard src={video} number={2} />
            <CamCard src={video} number={3} />
        </div>
      </div>
    </div>
  )
}

export default Records
