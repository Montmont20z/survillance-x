import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Area from '../components/Area';
import CamCard from '../components/CamCard';

import footage from '../assets/footage.mp4';
import ReactPlayer from 'react-player';
import MainCam from '../components/MainCam';
import Infrared from '../components/Infrared';

const Home = () => {
  const [ isHighlight, setIsHighlight ] = useState([true,false,false,false]);

  const handleAreaClick = (index) => {
    const newHighlight = isHighlight.map((_, i) => i === index);
    setIsHighlight(newHighlight);
    //check isHighlight fn
  }

  //on load get all videos for camera 11, 12, 13
  //data store in footage

  //check which isHighlight element is true, display that area cam card 

  //set main cam trigger
  //change the src of MainCam component 

  return (
    <div className='flex flex-row bg-slate-100 ' >
        <Sidebar />
        <div className="flex flex-col h-screen w-auto">
            <div className="font-inter text-xl font-semibold h-12 w-screen pl-4 flex items-center bg-white"> Dashboard Control </div>   
            <div className="font-lato ml-4 m-2">List of Camera</div>
            <div className="flex items-center justify-start w-screen h-12 bg-white">
                <Area number='1' isHighlight={isHighlight[0]} handleAreaClick={() => handleAreaClick(0)} />
                <Area number='2' isHighlight={isHighlight[1]} handleAreaClick={() => handleAreaClick(1)} />
                <Area number='3' isHighlight={isHighlight[2]} handleAreaClick={() => handleAreaClick(2)} />
                <Area number='4' isHighlight={isHighlight[3]} handleAreaClick={() => handleAreaClick(3)} />            
            </div>
            <div className="flex flex-row ">
              <CamCard src={footage} number={1} />
              <CamCard src={footage} number={2} />
              <CamCard src={footage} number={3} />
            </div>
            <MainCam src={footage} />
            <Infrared />
        </div>
    </div>
  )
}

export default Home
