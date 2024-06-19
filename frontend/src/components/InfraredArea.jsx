import React from 'react'
import { FaCircle } from "react-icons/fa6";


const InfraredArea = ({number, color}) => {
  return (
    <div className='w-44 flex flex-row justify-between items-center outline rounded-lg mx-3 px-4 py-1 m-3' >
        <div className="font-inter">Area {number}</div>
        <FaCircle color={color ? 'red' : 'green'} />
    </div>
  )
}

export default InfraredArea
