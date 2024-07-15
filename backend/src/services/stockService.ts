import StockDataModel, { IStockData } from "../models/StockData";

class StockService {
    static async fetchStockData(code: string): Promise<IStockData[]> {
        try {
            const stockData = await StockDataModel.find({code}).sort({createdAt: -1}).limit(20);
            return stockData;
        } catch (error:any) {
            console.log(error.message);
            return [];
        }
    }
}

export default StockService;