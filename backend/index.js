import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';

import { PORT, mongoDBURL } from "./config.js";
import cors from "cors";
import mongoose from "mongoose";
import userRoute from './routes/userRoutes.js';
import infraredRoute from './routes/infraredRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (request, response) => {
    return response.status(234).send('Surveillance-x');
})

app.use('/videos', express.static(path.join(__dirname, 'videos')));

app.use('/user', userRoute);
app.use('/infrared', infraredRoute);

app.get('/videos', async (request, response) => {
    try {
        const { cams } = request.query;
        
        if (!Array.isArray(cams)) {
            return response.status(400).send({ message: 'cams must be an array' });
        }

        const videoUrls = cams.map(cam => `http://localhost:5000/videos/vid${cam}.mp4`);

        return response.status(200).json({ videos: videoUrls });
        
    }
    catch (error) {
        console.error(error);
        return response.status(500).send({ message: 'Server error' });
    }
});

mongoose
    .connect(mongoDBURL)
    .then(()=>{
        console.log("App connected to database");

        app.listen(PORT, ()=>{
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    })