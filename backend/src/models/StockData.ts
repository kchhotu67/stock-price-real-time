import mongoose, { Schema, Document } from 'mongoose';

export interface IStockData extends Document {
  code: String;
  name: String;
  currency: String;
  price: Number;
}

const StockDataSchema: Schema = new Schema({
    code: {type: String, require: true },
    name: {type: String, require: true},
    currency: {type: String, require: true},
    price: {type: Number, require: true},
}, {
    timestamps: true
});

export default mongoose.model<IStockData>('StockData', StockDataSchema);
