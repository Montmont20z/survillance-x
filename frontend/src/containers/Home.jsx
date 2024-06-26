import React, { useState, useEffect } from 'react'
import axios from "axios";
import Sidebar from '../components/Sidebar'
import Area from '../components/Area';
import CamCard from '../components/CamCard';

import footage from '../assets/footage.mp4';
import ReactPlayer from 'react-player';
import MainCam from '../components/MainCam';
import Infrared from '../components/Infrared';

const Home = () => {
  const [ isHighlight, setIsHighlight ] = useState([true,false,false,false]);
  const [ videoURL, setVideoURL ] = useState([]);
  const [ mainCamVideoURL, setMainCamVideoURL ] = useState([]);
  const [ camCard, setCamCard ] = useState([]);

  // const area1 = 'cams[]=11&cams[]=12&cams[]=13';
  // const area2 = 'cams[]=21&cams[]=22&cams[]=23';
  // const area3 = 'cams[]=31&cams[]=32&cams[]=33';
  // const area4 = 'cams[]=41&cams[]=42&cams[]=43';

  const area1 = 'cams[]=1&cams[]=2&cams[]=3';
  const area2 = 'cams[]=4&cams[]=5&cams[]=6';
  const area3 = 'cams[]=7&cams[]=8&cams[]=9';
  const area4 = 'cams[]=8&cams[]=9&cams[]=43';

  const handleAreaClick = (index) => {
    const newHighlight = isHighlight.map((_, i) => i === index);
    setIsHighlight(newHighlight);
   
    let area;
    switch (index) {
      case 0:
        area = area1;
        break;
      case 1:
        area = area2;
        break;
      case 2:
        area = area3;
        break;
      case 3:
        area = area4;
        break;
      default:
        area = '';
    }

    axios
    .get(`http://localhost:5000/videos?${area}`)
    .then((response) => {
      console.log('URL: ', response.data.videos);
      setVideoURL(response.data.videos);
      setMainCamVideoURL(response.data.videos[0]);

    })
    .catch((error) => {
      console.log(error.message);
    });
  }

  //on load get all videos for camera 11, 12, 13
  useEffect(() => {
    axios
      .get('http://localhost:5000/videos?cams[]=1&cams[]=2&cams[]=3')
      .then((response) => {
        console.log('URL: ', response.data.videos);
        setVideoURL(response.data.videos);
        setMainCamVideoURL(response.data.videos[0]);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

   
  //set main cam trigger
  //change the src of MainCam component 
  const handleCamClick = (index) => {
    
  }

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
              <CamCard src={videoURL[0]} number={1} />
              <CamCard src={videoURL[1]} number={2} onClick={setMainCamVideoURL[videoURL[1]]}/>
              <CamCard src={videoURL[2]} number={3} />
              {/* <CamCard src={'http://localhost:5000/videos/vid1.mp4'} number={4} /> */}
              {/* <CamCard src={videoURL[2]} number={5} /> */}

            </div>
            <MainCam src={mainCamVideoURL} />
            <Infrared />
        </div>
    </div>
  )
}

export default Home
