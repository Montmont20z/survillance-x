import express from 'express';
import { User } from '../models/userModel.js';

const router = express.Router();

//route: http://localhost:5000/user
//request body: { userID, password }
//route to save new user
router.post('/', async (request, response) => {
    console.log("in post method /user");
    try {
        if (
          !request.body.userID ||
          !request.body.password 
        ) {
          return response.status(400).send({
            message: 'Send all required fields: title, author, publishYear',
          });
        }
        const newUser = {
          userID: request.body.userID,
          password: request.body.password
        };
    
        const user = await User.create(newUser);
    
        return response.status(201).send(user);
      } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
      }

});

//route: http://localhost:5000/user/login
//request body: { userID, password }
//route for login 
router.post('/login', async (request, response) => {
    console.log("in post method /user/login");

    try {
        if (
            !request.body.userID || 
            !request.body.password
        ) {
            return response.status(400).send({
              message: 'Send all required fields: userID, password',
            });
        }

        const { userID, password } = request.body;

        const user = await User.findOne({ userID : userID });

        //user not found
        if (!user) {
            return response.status(404).send({ message: 'User not found' });
        }

        //incorrect password
        if (user.password !== password) {
            return response.status(401).send({ message: 'Wrong password' });
        }

        //successful login
        return response.status(200).send({ message: 'Login successful', user });    
    }
    catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});



export default router;
