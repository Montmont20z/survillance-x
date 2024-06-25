import React, { useState, useEffect } from 'react'
import { RiScanFill } from "react-icons/ri";
import InfraredArea from './InfraredArea';
import axios from "axios";


const Infrared = () => {
    const area = [1,2,3,4];
    const [ infrared, setInfrared ] = useState([]);

    //on load read database infrared
    useEffect(() => {
        axios
          .get('http://localhost:5000/infrared')
          .then((response) => {
            setInfrared([]);
            console.log("Received response: ", response.data);
            setInfrared(response.data);
            console.log(infrared);
          })
          .catch((error) => {
            console.log(error.message);
          });
      }, []); 

      // split infrared into group of 4
      var groupedInfrared = [];
      for (let i = 0; i < infrared.length; i += 4){
        groupedInfrared.push(infrared.slice(i, i+4));
      }

    return (
    <div className='h-22 w-fit bg-white rounded-md m-2 p-2' >
        <div className="flex items-center m-3">
            <RiScanFill />
            <div className='font-inter ml-2 text-lg' >Infrared</div>
        </div>
        <div className='flex flex-row'>
            {!infrared ? (
                <div className='font-inter ml-2 text-lg' >No infrared data founded</div>
            ) : (
                <>
                    {groupedInfrared.map((group, index) => (
                        <div key={index} className='flex flex-col' >
                            {group.map((inf, innerIndex) => (
                                <InfraredArea key={innerIndex} number={inf.area} color={inf.status} />
                            ))}
                        </div>
                    ))}
                </>
            )}
        </div>       
    </div>
  )
}

export default Infrared
