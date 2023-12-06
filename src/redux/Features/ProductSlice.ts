import { getProducts } from "@/apis/ProductApi";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
}
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProductsData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const {getProductsData}=productSlice.actions;
export default productSlice.reducer;
