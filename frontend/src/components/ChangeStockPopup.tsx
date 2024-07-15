import React, { useEffect, useRef } from "react";
import Modal from "./Model";
import { useSelector } from "react-redux";
import { selectSymbol } from "../store/stockSlice";
import { stocks } from "../constants";


interface ChangeStockPopupProps {
  onSubmit: (stockCode: string) => void;
  onClose: () => void;
}

const ChangeStockPopup: React.FC<ChangeStockPopupProps> = ({ onClose, onSubmit }) => {
  const symbol = useSelector(selectSymbol);
  const selectedStockRef = useRef<string>(symbol);

  useEffect(() => {
    selectedStockRef.current = symbol;
  }, [symbol]);

  const handleStockChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    selectedStockRef.current = e.target.value;
  };

  return (
    <Modal onClose={onClose}>
      <div>
        <h2 className="text-lg font-bold mb-4">Change Stock</h2>
        <div className="mb-4">
          <label
            htmlFor="stock"
            className="block text-sm font-medium text-gray-700"
          >
            Select Stock
          </label>
          <select
            id="stock"
            name="stock"
            onChange={handleStockChange}
            defaultValue={symbol}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            {stocks.map((stock) => (
              <option value={stock.code} key={stock.code}>
                {stock.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-end">
          <button
            onClick={() => {onSubmit(selectedStockRef.current)}}
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ChangeStockPopup;
