import React from "react";
import StockTable from "./components/StockTable";
import Header from "./components/Header";
import ChangeStockPopup from "./components/ChangeStockPopup";
import { useSelector } from "react-redux";
import { selectStockPopupStatus, selectSymbol, setSymbol, updateChangeStockPopupStatus } from "./store/stockSlice";
import { useDispatch } from "react-redux";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectStockPopupStatus);
  const selectedStock = useSelector(selectSymbol);

  const handleSubmit = (stockCode: string) => {
    dispatch(setSymbol(stockCode));
    closeModal();
  };

  const openModal = () => {
    dispatch(updateChangeStockPopupStatus(true));
  };

  const closeModal = () => {
    dispatch(updateChangeStockPopupStatus(false));
  };

  return (
    <div className="App mt-16">
      <Header changeStock={openModal} stockCode={selectedStock}/>
      {isOpen && (
        <ChangeStockPopup onClose={closeModal} onSubmit={handleSubmit}/>
      )}
      <StockTable/>
    </div>
  );
};

export default App;
