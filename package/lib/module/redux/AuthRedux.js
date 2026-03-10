"use strict";

import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import axios from 'axios';
import config from "../config/Config.js";
import { AN_ERR_OCCUR, FAILED, IDLE, LOADING, SUCCEEDED } from "../constants/Constants.js";
const initialState = {
  responseAuth: null,
  status: IDLE,
  error: null
};
export const authRequest = createAsyncThunk(config.authAPI, async requestData => {
  try {
    console.log('requestData::::::', requestData);
    const response = await axios.post(config.authAPI, requestData);
    return response.data; // Ensure the response matches the `ResponseAuth` type
  } catch (error) {
    throw error.response.data;
  }
});
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(authRequest.pending, state => {
      state.status = LOADING;
    }).addCase(authRequest.fulfilled, (state, action) => {
      state.status = SUCCEEDED;
      state.responseAuth = action.payload;
    }).addCase(authRequest.rejected, (state, action) => {
      state.status = FAILED;
      state.error = action.error.message || AN_ERR_OCCUR;
    });
  }
});
const selectState = state => state.auth;
export const authResponse = createSelector(selectState, state => state.responseAuth);
export const authStatus = createSelector(selectState, state => state.status);
export const authError = createSelector(selectState, state => state.error);
export default authSlice.reducer;
//# sourceMappingURL=AuthRedux.js.map