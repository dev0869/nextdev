import { configureStore } from "@reduxjs/toolkit";
import ProductSlice, { productSlice } from "./Features/ProductSlice";
export const store = configureStore({
  reducer: {
    products: productSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
