import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const GetProduct = createAsyncThunk(
  "products/getProduct",
  async (_id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${_id}`);
    const allproduct = await response.json();
    return allproduct;
  }
);
export const ProductReducer = createSlice({
  name: "oneProductStore",
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
