import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import shortenRoutes from './routes/shorten';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/shorten', shortenRoutes);

app.get('/:shortId', async (req, res) => {
  const Url = (await import('./models/Url')).default;
  const found = await Url.findOne({ shortId: req.params.shortId });
  if (found) {
    return res.redirect(found.originalUrl);
  }
  return res.status(404).send('URL not found');
});

mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch(err => console.error(err));
