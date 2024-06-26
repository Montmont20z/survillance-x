import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import cors from "cors";
import mongoose from "mongoose";
import userRoute from './routes/userRoutes.js';
import infraredRoute from './routes/infraredRoutes.js';
import videoRoute from './routes/videoRoutes.js';
import path from "path";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());

app.use(cors());

app.get('/', (request, response) => {
    return response.status(234).send('Surveillance-x');
})

app.use('/user', userRoute);
app.use('/infrared', infraredRoute);
app.use('/video', videoRoute);

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