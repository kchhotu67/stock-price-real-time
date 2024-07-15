"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const mongoose_1 = __importDefault(require("mongoose"));
const pullStockData_1 = __importDefault(require("./pullStockData"));
const stockRoutes_1 = __importDefault(require("./routes/stockRoutes"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: ['http://localhost:3000', 'http://192.168.1.2:3000']
}));
const server = http_1.default.createServer(app);
app.use('/api/v1/stock/stock-data', stockRoutes_1.default);
// database connection
const MONGODB_URI = `${process.env.MONGODB_URI}`;
mongoose_1.default.connect(MONGODB_URI, {});
const db = mongoose_1.default.connection;
// const STOCK_PULL_INTERVAL = parseInt(`${process.env.STOCK_PULL_INTERVAL}`)*1000 || 5*60*1000;
const STOCK_PULL_INTERVAL = 15 * 60 * 1000;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
    setInterval(pullStockData_1.default, STOCK_PULL_INTERVAL);
});
const port = process.env.PORT || 3001;
server.listen(port, () => {
    console.log(`Server running at port ${port}`);
});
