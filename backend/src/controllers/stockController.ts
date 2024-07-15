import { Request, Response } from 'express';
import StockService from '../services/stockService';

class StockController {
    static async getStockLatestData(req: Request, res: Response): Promise<void> {
        const code = req.params.code;
        const data = await StockService.fetchStockData(code);
        res.status(200).json(data);
    }
}

export default StockController;