"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stockService_1 = __importDefault(require("../services/stockService"));
class StockController {
    static async getStockLatestData(req, res) {
        const code = req.params.code;
        const data = await stockService_1.default.fetchStockData(code);
        res.status(200).json(data);
    }
}
exports.default = StockController;
