import dotenv from 'dotenv';
import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import authRoute from './routes/auth.js';
import userRoute from './routes/users.js';
import postRoute from './routes/posts.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.DB_URI);

mongoose.connection.on('connected', () => {
      console.log('connected to mongodb');
    });

app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });

app.get('/', (req, res) => {
  res.send('this is new home')
})

// route
app.use('/auth', authRoute);
app.use('/users', userRoute);
app.use('/posts', postRoute);