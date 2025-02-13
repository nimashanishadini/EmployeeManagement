import express from 'express';
import { login } from '../controllers/AuthController.js';  // Add .js extension

const router = express.Router();

router.post('/login', login);


export default router;
