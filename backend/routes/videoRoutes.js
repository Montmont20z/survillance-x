import express from 'express';
import { Video } from '../models/videoModel.js';

const router = express.Router();

//route: http://localhost:5000/video
//request query: cam[]
//route to get selected camera video
router.get('/', async (request, response) => {
    try {
        console.log("in get method /videos");

        const { cams } = request.query;

        
        //const infrared = await Infrared.find({});

        return response.status(200).send(cams);
        
    }
    catch (error) {
        console.log(error.message);
        return response.status(500).send({ message: error.message });
    }
});

//route: http://localhost:5000/infrared/new
//request body: { area, status }
//route to save new infrared
router.post('/new', async (request, response) => {
    console.log("in post method /infrared/new");
    try {
        if (
          !request.body.area ||
          !request.body.status 
        ) {
          return response.status(400).send({
            message: 'Send all required fields: area, status',
          });
        }
        const newInfrared = {
          area: request.body.area,
          status: request.body.status
        };
        
        const infrared = await Infrared.create(newInfrared);
    
        // Adding 20 documents
        // const additionalDocuments = Array.from({ length: 18 }, (_, index) => {
        //     const area = index + 3; // Start from area 3
        //     const status = Math.random() < 0.5; // Random status (true or false)
        //     return { area, status };
        // });

        // await Infrared.insertMany(additionalDocuments);

        return response.status(201).send(infrared);
      } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
      }

});


export default router;