"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const StockData_1 = __importDefault(require("./models/StockData"));
const API_URL = `${process.env.STOCK_API_URL}`;
const API_KEY = `${process.env.STOCK_API_KEY}`;
const STOCK_CURRENCY = `${process.env.STOCK_CURRENCY}`;
const stockCode = ['BTC', 'ETH', 'USDT', 'BNB', 'DOGE'];
async function fetchStockDataAndSave() {
    try {
        const promises = stockCode.map(async (code) => {
            const response = await axios_1.default.post(API_URL, {
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
            const stockData = {
                code: code,
                name: data.name,
                currency: STOCK_CURRENCY,
                price: data.rate
            };
            return StockData_1.default.create(stockData);
        });
        const results = await Promise.all(promises);
        console.log('Data saved to MongoDB for stocks:', stockCode);
    }
    catch (error) {
        console.error('Error fetching or saving data:', error.message);
    }
}
exports.default = fetchStockDataAndSave;
