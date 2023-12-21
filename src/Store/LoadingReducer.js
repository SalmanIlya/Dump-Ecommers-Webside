import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const LoaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    showLoader: () => true,
    hideLoader: () => false,
  },
});

export const { showLoader, hideLoader } = LoaderSlice.actions;
export default LoaderSlice;
