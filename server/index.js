import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';  // ✅ Import dotenv
import connectToDatabase from './db/db.js'

dotenv.config();  // ✅ Load environment variables

import authRouter from './routes/auth.js';
connectToDatabase()
const app = express();

const PORT = process.env.PORT || 5000;  // ✅ Set a default value

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRouter);


app.listen(PORT, () => {  // ✅ Use the correct variable
    console.log(`Server is Running on Port ${PORT}`);
});
