import React from "react";
import { stocks } from "../constants";
interface HeaderProps {
  changeStock: () => void;
  stockCode: string;
}


const Header: React.FC<HeaderProps> = ({ stockCode, changeStock }) => {
  const stockName = stocks.filter((stock) => stock.code === stockCode)[0].name;
  return (
    <nav className="bg-gray-800 px-6 fixed top-0 left-0 right-0">
      <div className="h-16 py-3 flex items-start justify-between">
        <div>
          <h1 className="text-white text-3xl font-bold">Stock Price</h1>
        </div>
        <div>
          <span className="text-white text-2xl mr-4 font-normal">
            {stockName}
          </span>
          <button
            className="bg-purple-600 hover:bg-purple-700 py-2 px-3 rounded-md text-white cursor-pointer shadow-lg font-semibold active:bg-purple-600"
            onClick={changeStock}
          >
            Change Stock
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
