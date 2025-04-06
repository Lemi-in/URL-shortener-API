import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './db/connect';
import shortenRoutes from './routes/shorten';
import { handleRedirect } from './controllers/redirectController';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/shorten', shortenRoutes);
app.get('/:shortId', handleRedirect);

connectDB().then(() => {
  app.listen(port, () => console.log(`Server running on port ${port}`));
});
