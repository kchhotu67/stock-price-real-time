import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import stockReducer from "./stockSlice";

const rootReducer = combineReducers({
  stock: stockReducer,
});

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }

    const loadedState = JSON.parse(serializedState);
    loadedState.stock.changeStockPopupStatus = false;
    return loadedState;
  } catch (err) {
    return undefined;
  }
};

const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (err) {
    console.log(err);
  }
};

const preloadedState = loadState();

export const store = configureStore({
  reducer: rootReducer,
  preloadedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ReturnType<typeof store.dispatch>;
