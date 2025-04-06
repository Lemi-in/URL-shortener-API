import Url from '../models/Url.js';
import { nanoid } from 'nanoid';
export const createShortUrl = async (req, res) => {
    const { originalUrl } = req.body;
    if (!originalUrl) {
        return res.status(400).json({ error: 'Original URL is required' });
    }
    const shortId = nanoid(7);
    const newUrl = new Url({ originalUrl, shortId });
    await newUrl.save();
    res.json({ shortUrl: `${req.protocol}://${req.get('host')}/${shortId}` });
};
