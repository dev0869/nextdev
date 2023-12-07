import { getProducts } from "@/apis/ProductApi";
import { ProductProps } from "@/types/Types";
import { createSlice } from "@reduxjs/toolkit";

type initialProps = {
  data: ProductProps[];
};
const initialState = {
  data: [],
} as initialProps;

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProductsData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { getProductsData } = productSlice.actions;
export default productSlice.reducer;
