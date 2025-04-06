import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import shortenRoutes from './routes/shorten.js';
import { handleRedirect } from './controllers/redirectController.js';
export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected');
    }
    catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
};
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
