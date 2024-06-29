import express from 'express';
import mongoose from './config.js'; // Ensure this file connects to your MongoDB Atlas
import booksRoute from './routes/booksRoute.js';
import userRoute from './routes/userRoute.js';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000; 

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
app.use(cors());

// Option 2: Allow Custom Origins (if needed)
// app.use(
//   cors({
//     origin: 'http://your-frontend-domain.com', // Update this to your frontend's domain
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );



app.use('/books', booksRoute);    
app.use('/users', userRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
