import React from 'react'
import { RiScanFill } from "react-icons/ri";
import InfraredArea from './InfraredArea';


const Infrared = () => {
    const area = [1,2,3,4];

    //on load read database infrared

    return (
    <div className='h-22 w-fit bg-white rounded-md m-2 p-2' >
        <div className="flex items-center m-3">
            <RiScanFill />
            <div className='font-inter ml-2 text-lg' >Infrared</div>
        </div>
        <div className='flex flex-row' >
            <div className="flex flex-col">
                {area.map((area) => (<InfraredArea number={area} color={area % 2 === 0} />))}
            </div>
            <div className="flex flex-col">
                {area.map((area) => (<InfraredArea number={area+4} color={area % 2 === 0} />))}
            </div>
            <div className="flex flex-col">
                {area.map((area) => (<InfraredArea number={area+8} color={area % 2 === 0} />))}
            </div>
            <div className="flex flex-col">
                {area.map((area) => (<InfraredArea number={area+12} color={area % 2 === 0} />))}
            </div>
        </div>
    </div>
  )
}

export default Infrared
