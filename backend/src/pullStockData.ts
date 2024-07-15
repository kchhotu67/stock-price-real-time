import axios from 'axios';
import StockDataModel, { IStockData } from './models/StockData';

const API_URL = `${process.env.STOCK_API_URL}`;
const API_KEY = `${process.env.STOCK_API_KEY}`;
const STOCK_CURRENCY = `${process.env.STOCK_CURRENCY}`;

const stockCode = ['BTC', 'ETH', 'USDT', 'BNB', 'DOGE'];

async function fetchStockDataAndSave() {
  try {
    const promises = stockCode.map(async (code) => {
      const response = await axios.post(API_URL, {
        currency: STOCK_CURRENCY,
        code: code,
        meta: true
      }, {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': API_KEY
        }
      });
  
      const data = response.data;

      const stockData: Partial<IStockData> = {
        code: code,
        name: data.name,
        currency: STOCK_CURRENCY,
        price: data.rate
      };
      return StockDataModel.create(stockData);
    });

    const results = await Promise.all(promises);
    console.log('Data saved to MongoDB for stocks:', stockCode);
  } catch (error:any) {
    console.error('Error fetching or saving data:', error.message);
  }
}

export default fetchStockDataAndSave;
