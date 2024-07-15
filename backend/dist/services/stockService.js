"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const StockData_1 = __importDefault(require("../models/StockData"));
class StockService {
    static async fetchStockData(code) {
        try {
            const stockData = await StockData_1.default.find({ code }).sort({ createdAt: -1 }).limit(20);
            return stockData;
        }
        catch (error) {
            console.log(error.message);
            return [];
        }
    }
}
exports.default = StockService;
