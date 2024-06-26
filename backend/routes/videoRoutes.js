import express from 'express';
import { Video } from '../models/videoModel.js';
import path from 'path';

const router = express.Router();

router.use('/', express.static(path.join(__dirname, '../videos')));

const videoUrls = [
  'http://localhost:5000/video/files/video1.mp4',
  'http://localhost:5000/video/files/video2.mp4',
  // Add more video URLs here
];

router.get('/', (req, res) => {
  console.log('video route gotten');
  res.json(videoUrls);
});


//route: http://localhost:5000/video
//request query: cam[]
//route to get selected camera video
// router.get('/', async (request, response) => {
//   try {
//       console.log("in get method /video");

//       // Destructure 'cams' from query parameters
//       const { cams } = request.query;

//       // Ensure cams is an array (query parameters might be strings)
//       const cameraNumbers = Array.isArray(cams) ? cams : [cams];

//       // Example: retrieve video URLs based on camera numbers
//       // This is where you would typically query your database
//       const videoUrls = cameraNumbers.map(cam => `http://example.com/videos/${cam}`);

//       // Send the URLs back as JSON
//       return response.status(200).json(videoUrls);
//   }
//   catch (error) {
//       console.log(error.message);
//       return response.status(500).json({ message: error.message });
//   }
// });

//route: http://localhost:5000/video/new
//route to save new video
router.post('/new', async (request, response) => {
    console.log("in post method /video/new");
    try {
        
        
    
        
        const additionalDocuments = Array.from({ length: 9 }, (_, index) => {
            const cam = index + 1; 
            const status = Math.random() < 0.5; // Random status (true or false)
            return { area, status };
        });

        await Infrared.insertMany(additionalDocuments);

        return response.status(201).send(infrared);
      } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
      }

});


export default router;