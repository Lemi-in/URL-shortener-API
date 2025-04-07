import express from 'express';
import { createShortUrl } from '../controllers/shortenController.js';

const router = express.Router();
router.post('/', createShortUrl);
export default router;
