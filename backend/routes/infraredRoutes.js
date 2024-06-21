import express from 'express';
import { Infrared } from '../models/infraredModel.js';

const router = express.Router();

//route: http://localhost:5000/infrared
//route to get all infrared records
router.get('/', async (request, response) => {
    try {
        const infrared = await Infrared.find({});

        return response.status(200).send(infrared);
        
    }
    catch (error) {
        console.log(error.message);
        return response.status(500).send({ message: error.message });
    }
});

export default router;