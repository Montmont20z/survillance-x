import React from 'react';
import ReactPlayer from 'react-player';

const MainCam = ({ src }) => {
  return (
    <div className="m-2 p-2 bg-white rounded-md h-fit w-fit flex flex-col justify-center">
        <div className="font-inter px-3 pb-2">Main Cam </div>
        <ReactPlayer url={src} width='610px' height='330px' playing={true} loop />
        
    </div>
  )
}

export default MainCam
