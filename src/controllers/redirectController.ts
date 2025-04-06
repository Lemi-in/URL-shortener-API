import { Request, Response } from 'express';
import Url from '../models/Url';

export const handleRedirect = async (req: Request, res: Response): Promise<void> => {
  const { shortId } = req.params;
  const found = await Url.findOne({ shortId });

  if (found) {
    return res.redirect(found.originalUrl);
  }

  return res.status(404).send('URL not found');
};
