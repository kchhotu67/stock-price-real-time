export interface StockPriceData {
    _id: string;
    code: string;
    name: string;
    price: number;
    currency: string;
    createdAt: string;
}

export interface Stock {
  id: number;
  code: string;
  name: string;
}
