import React, { useEffect, useState } from 'react'
import { FaFilter } from "react-icons/fa";
import MainCam from './MainCam';
import video from '../assets/footage.mp4';


const FilterButtons = () => {
    const [ startDate, setStartDate ] = useState('');
    const [ startTime, setStartTime ] = useState('');
    const [ endDate, setEndDate ] = useState('');
    const [ endTime, setEndTime ] = useState('');
    const [ isToggle, setIsToggle ] = useState(false);

    useEffect(() => {
        console.log(startTime);
    }, [startTime])

  return (
    <div className='flex flex-row bg-white ml-3 rounded-lg p-2 px-3 w-fit' >
        {/* Start Date */}
        <div className="flex flex-col">
            <div className="text-inter text-lg ml-2">Start Date</div>
            <input 
                type='date'
                className='outline outline-slate-400 outline-1 w-48 h-7 m-2 p-2'
                onChange={(e) => (setStartDate(e.target.value))}
                value={startDate}
            />
            <input 
                type='time'
                className='outline outline-slate-400 outline-1 w-48 h-7 m-2 p-2'
                onChange={(e) => (setStartTime(e.target.value))}
                value={startTime}
            />
        </div>

        {/* End Date */}
        <div className="flex flex-col ">
            <div className="text-inter text-lg ml-2">End Date</div>
            <input 
                type='date'
                className='outline outline-slate-400 outline-1 w-48 h-7 m-2 p-2'
                onChange={(e) => (setEndDate(e.target.value))}
                value={endDate}
            />
            <input 
                type='time'
                className='outline outline-slate-400 outline-1 w-48 h-7 m-2 p-2'
                onChange={(e) => (setEndTime(e.target.value))}
                value={endTime}
            />
            {/* set onclick */}
            {/* function to query database (date time) => {} */}
            <button className='flex items-center justify-center bg-blue-500 rounded-lg w-28 h-8 shrink-0 m-4 ml-10' >
                <FaFilter color='white' />
                <div className="text-inter text-white pl-1">Filter</div>
            </button>
        </div>

        {/* Toggle button */}
        <div className="flex flex-col ml-6">
            <div className="text-inter text-lg ml-2">Ai auto crop</div>
            <div 
                className='relative inline-block w-14 h-7 rounded-2xl outline cursor-pointer bg-yellow-100 m-2' 
                onClick={() => setIsToggle(!isToggle)}
            >
                <span className={`absolute inset-0 rounded-2xl transition duration-500 ${isToggle ? 'bg-blue-500 ' : 'bg-zinc-300'}`} ></span>
                <div className={`h-6 w-6 absolute inset-0.5 bg-white rounded-full transition duration-500 ${isToggle ? 'translate-x-7' : '' }`} ></div>
                
            </div>
        </div>
    </div>
  )
}

export default FilterButtons
