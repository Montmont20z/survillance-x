import React, { useState, useEffect } from 'react'
import axios from "axios";
import Sidebar from '../components/Sidebar'
import Area from '../components/Area';
import CamCard from '../components/CamCard';

import ReactPlayer from 'react-player';
import MainCam from '../components/MainCam';
import Infrared from '../components/Infrared';

const Home = () => {
  const [ isHighlight, setIsHighlight ] = useState([true,false,false,false]);
  const [ videoURL, setVideoURL ] = useState([]);

  //const camRoute = ['cams[]=1&cams[]=2&cams[]=3', 'cams[]=4&cams[]=5&cams[]=6', 'cams[]=7&cams[]=8&cams[]=9'];
  //const route = `http://localhost:5000/video?${camRoute[0]}`;

  const handleAreaClick = (index) => {
    const newHighlight = isHighlight.map((_, i) => i === index);
    setIsHighlight(newHighlight);
    //check isHighlight fn
  }

  //on load get all videos for camera 11, 12, 13
  //data store in footage
  useEffect(() => {
    axios
      .get('http://localhost:5000/video')
      .then((response) => {
        console.log("video: ", response.data);
        //setVideoURL(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  });

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
              <CamCard src={'./uploads/vid4.mp4'} number={1} />
              <CamCard src={'./uploads/vid2.mp4'} number={2} />
              <CamCard src={'./uploads/vid3.mp4'} number={3} />
            </div>
            <MainCam src={'../assets/vid1.mp4'} />
            <Infrared />
        </div>
    </div>
  )
}

export default Home
