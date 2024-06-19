import React from 'react'
import { GoDotFill } from "react-icons/go";

const Area = ({ number, isHighlight, handleAreaClick }) => {
  return (
    <div className="font-inter flex flex-col items-center px-8 py-2 cursor-pointer hover:bg-gray-100 transition duration-100" onClick={handleAreaClick} >
        <div className={isHighlight ? 'text-black' : 'text-gray-400'} > Area {number} </div>
        {isHighlight && <GoDotFill />}
    </div>
  )
}

export default Area
