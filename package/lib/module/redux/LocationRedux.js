"use strict";

import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import axios from 'axios';
import config from "../config/Config.js";
import { AN_ERR_OCCUR, FAILED, IDLE, LOADING, SUCCEEDED } from "../constants/Constants.js";
const initialState = {
  responseLocation: [],
  status: IDLE,
  error: null
};
export const locationRequest = createAsyncThunk(config.updateLocation, async requestData => {
  try {
    const response = await axios.post(config.updateLocation, requestData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});
const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(locationRequest.pending, state => {
      state.status = LOADING;
    }).addCase(locationRequest.fulfilled, (state, action) => {
      state.status = SUCCEEDED;
      state.responseLocation = action.payload;
    }).addCase(locationRequest.rejected, (state, action) => {
      state.status = FAILED;
      state.error = action.error.message || AN_ERR_OCCUR;
    });
  }
});
const selectState = state => state.location;
export const locationResponse = createSelector(selectState, state => state.responseLocation);
export const locationStatus = createSelector(selectState, state => state.status);
export const locationError = createSelector(selectState, state => state.error);
export default locationSlice.reducer;
//# sourceMappingURL=LocationRedux.js.map