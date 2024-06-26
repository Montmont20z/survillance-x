import React from 'react';
import { HiDotsVertical } from "react-icons/hi";
import ReactPlayer from 'react-player';


const CamCard = ({ src, number, onClick }) => {
  return (
    <div className='m-2 p-2 bg-white rounded-md' >
      <div className="flex flex-row items-center justify-between">
        <div className="font-inter px-3">Cam {number}</div>
        <HiDotsVertical className='ml-10' />
      </div>
      {/* on click */}
      <ReactPlayer url={src} width='184px' height='120px' loop playing={true} />
    </div>
  )
}

export default CamCard
