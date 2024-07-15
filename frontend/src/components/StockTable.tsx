import React, { useEffect } from 'react';
import { StockPriceData } from '../types';
import { useSelector } from 'react-redux';
import { selectStockData, selectSymbol, setStockData } from '../store/stockSlice';
import { useDispatch } from 'react-redux';


const StockTable: React.FC = () => {
    const symbol = useSelector(selectSymbol);
    const dispatch = useDispatch();

    const stockData = useSelector(selectStockData);

  useEffect(() => {
    const API_URL = process.env.REACT_APP_API_BASE_URL;
    const fetchInitialData = async () => {
      try {
        const response = await fetch(`${API_URL}/api/v1/stock/stock-data/${symbol}`);
        const data: StockPriceData[] = await response.json();
        dispatch(setStockData(data))
      } catch (error) {
        console.log(error);
      }
    };

    fetchInitialData();
    const intervalId = setInterval(() => {
        fetchInitialData();
    }, 5000); 
    return () => {
        clearInterval(intervalId);
    }

  }, [symbol, dispatch]);
  return (
    <table className='w-full'>
      <thead className=''>
        <tr className='border-b border-gray-400'>
          <th className='text-left py-4 px-6'>S.N.</th>
          <th className='text-left py-4 px-6'>Name</th>
          {/* <th className='text-left py-4 px-6'>Code</th> */}
          <th className='text-left py-4 px-6'>Timestamp</th>
          <th className='text-left py-4 px-6'>Price</th>
        </tr>
      </thead>
      <tbody>
        {stockData.map((stock, index) => (
          <tr key={index} className='border-b border-gray-300 hover:bg-gray-200'>
            <td className='text-left py-3 px-6'>{index+1}</td>
            <td className='text-left py-3 px-6'>{stock.name}</td>
            {/* <td className='text-left py-3 px-6'>{stock.code}</td> */}
            <td className='text-left py-3 px-6'>{new Date(stock.createdAt).toUTCString()}</td>
            <td className='text-left py-3 px-6'>${stock.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StockTable;
