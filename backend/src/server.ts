import dotEnv from 'dotenv';
dotEnv.config();

import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import fetchStockDataAndSave from './pullStockData';
import stockRouter from './routes/stockRoutes';
import cors from 'cors';

const app = express();
app.use(cors({
  origin: ['http://localhost:3000']
}));
const server = http.createServer(app);

app.use('/api/v1/stock/stock-data', stockRouter)

// database connection
const MONGODB_URI = `${process.env.MONGODB_URI}`;
mongoose.connect(MONGODB_URI, {});

const db = mongoose.connection;

// const STOCK_PULL_INTERVAL = parseInt(`${process.env.STOCK_PULL_INTERVAL}`)*1000 || 5*60*1000;
const STOCK_PULL_INTERVAL = 15*60*1000;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
  setInterval(fetchStockDataAndSave, STOCK_PULL_INTERVAL);
});


const port = process.env.PORT || 3001;
server.listen(port, () => {
  console.log(`Server running at port ${port}`);
  
});
