import express from 'express';
import { login } from '../controllers/AuthController.js'; 
import authMiddleware from '../middleware/authMiddleware.js'; 
import jwt from 'jsonwebtoken'; 

const { verify } = jwt; // 

const router = express.Router();

router.post('/login', login);
router.get('/verify', authMiddleware, verify);

export default router;
