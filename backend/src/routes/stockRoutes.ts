import express from 'express';
import StockController from '../controllers/stockController';

const router = express.Router();

router.get('/:code', StockController.getStockLatestData);

export default router;
