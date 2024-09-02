import { Router } from 'express';
import { processTask } from "../controllers/task.controller.js";
import rateLimiter from '../middleware/rateLimiter.js';

const router = Router();

// Route to handle task processing
router.post('/task', rateLimiter, processTask);

export default router;
