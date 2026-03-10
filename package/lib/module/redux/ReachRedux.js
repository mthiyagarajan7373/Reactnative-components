"use strict";

import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import axios from 'axios';
import config from "../config/Config.js";
import { AN_ERR_OCCUR, FAILED, IDLE, LOADING, SUCCEEDED } from "../constants/Constants.js";
const initialState = {
  responseReach: [],
  status: IDLE,
  error: null
};
export const reachReq = createAsyncThunk(config.reachAPI, async requestData => {
  try {
    const response = await axios.post(config.reachAPI, requestData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});
const reachSlice = createSlice({
  name: 'reach',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(reachReq.pending, state => {
      state.status = LOADING;
    }).addCase(reachReq.fulfilled, (state, action) => {
      state.status = SUCCEEDED;
      state.responseReach = action.payload;
    }).addCase(reachReq.rejected, (state, action) => {
      state.status = FAILED;
      state.error = action.error.message || AN_ERR_OCCUR;
    });
  }
});
const selectState = state => state.reach;
export const reachResponse = createSelector(selectState, state => state.responseReach);
export const reachStatus = createSelector(selectState, state => state.status);
export const reachError = createSelector(selectState, state => state.error);
export default reachSlice.reducer;
//# sourceMappingURL=ReachRedux.js.map