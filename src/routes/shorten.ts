import express from 'express';
import { createShortUrl } from '../controllers/shortenController';

const router = express.Router();
router.post('/', createShortUrl);
export default router;
