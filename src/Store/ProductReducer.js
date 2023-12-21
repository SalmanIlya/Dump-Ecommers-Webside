import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const GetProduct = createAsyncThunk("products/getProducts", async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  const allproduct = await response.data;
  return allproduct;
});

export const ProductReducer = createSlice({
  name: "productStore",
  initialState: {
    isLoading: false,
    Product: [],
  },
  extraReducers: {
    [GetProduct.pending]: (state) => {
      state.isLoading = true;
    },
    [GetProduct.fulfilled]: (state, action) => {
      state.Product = action.payload;
      state.isLoading = false;
    },
    [GetProduct.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});
export default ProductReducer.reducer;
