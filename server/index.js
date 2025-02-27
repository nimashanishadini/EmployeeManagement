import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'; // ✅ Import dotenv
import authRouter from './routes/auth.js';
import { connect } from 'mongoose';
import connectToDatabase from './db/db.js'

connectToDatabase()

dotenv.config(); // ✅ Load environment variables

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRouter);

const PORT = process.env.PORT || 5000; 

app.listen(PORT, () => { 
    console.log(`Server is Running on Port ${PORT}`);
});
