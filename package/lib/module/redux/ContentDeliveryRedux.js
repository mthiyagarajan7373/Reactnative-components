"use strict";

import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import axios from 'axios';
import config from "../config/Config.js";
import { AN_ERR_OCCUR, FAILED, IDLE, LOADING, SUCCEEDED } from "../constants/Constants.js";
const initialState = {
  responseContentDelivery: [],
  status: IDLE,
  error: null
};
export const contentDeliveryReq = createAsyncThunk(config.contentDelivery, async requestData => {
  try {
    const response = await axios.post(config.contentDelivery, requestData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});
const contentDeliverySlice = createSlice({
  name: 'contentDelivery',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(contentDeliveryReq.pending, state => {
      state.status = LOADING;
    }).addCase(contentDeliveryReq.fulfilled, (state, action) => {
      state.status = SUCCEEDED;
      state.responseContentDelivery = action.payload;
    }).addCase(contentDeliveryReq.rejected, (state, action) => {
      state.status = FAILED;
      state.error = action.error.message || AN_ERR_OCCUR;
    });
  }
});
const selectState = state => state.contentDelivery;
export const contentDeliveryResponse = createSelector(selectState, state => state.responseContentDelivery);
export const contentDeliveryStatus = createSelector(selectState, state => state.status);
export const contentDeliveryError = createSelector(selectState, state => state.error);
export default contentDeliverySlice.reducer;
//# sourceMappingURL=ContentDeliveryRedux.js.map