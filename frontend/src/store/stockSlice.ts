import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./index";
import { StockPriceData } from "../types";

interface StockState {
  changeStockPopupStatus: boolean;
  symbol: string;
  data: StockPriceData[];
}

const initialState: StockState = {
  changeStockPopupStatus: false,
  symbol: "BTC",
  data: [],
};

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    setStockData: (state, action: PayloadAction<StockPriceData[]>) => {
      state.data = action.payload;
    },
    setSymbol: (state, action: PayloadAction<string>) => {
      state.symbol = action.payload;
    },
    updateChangeStockPopupStatus: (state, action: PayloadAction<boolean>) => {
      state.changeStockPopupStatus = action.payload;
    },
  },
});

export const { setStockData, setSymbol, updateChangeStockPopupStatus } =
  stockSlice.actions;
export const selectStockData = (state: RootState) => state.stock.data;
export const selectSymbol = (state: RootState) => state.stock.symbol;
export const selectStockPopupStatus = (state: RootState) =>
  state.stock.changeStockPopupStatus;
export default stockSlice.reducer;
