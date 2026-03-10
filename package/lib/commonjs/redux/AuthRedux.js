"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.authStatus = exports.authResponse = exports.authRequest = exports.authError = void 0;
var _toolkit = require("@reduxjs/toolkit");
var _axios = _interopRequireDefault(require("axios"));
var _Config = _interopRequireDefault(require("../config/Config.js"));
var _Constants = require("../constants/Constants.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const initialState = {
  responseAuth: null,
  status: _Constants.IDLE,
  error: null
};
const authRequest = exports.authRequest = (0, _toolkit.createAsyncThunk)(_Config.default.authAPI, async requestData => {
  try {
    console.log('requestData::::::', requestData);
    const response = await _axios.default.post(_Config.default.authAPI, requestData);
    return response.data; // Ensure the response matches the `ResponseAuth` type
  } catch (error) {
    throw error.response.data;
  }
});
const authSlice = (0, _toolkit.createSlice)({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(authRequest.pending, state => {
      state.status = _Constants.LOADING;
    }).addCase(authRequest.fulfilled, (state, action) => {
      state.status = _Constants.SUCCEEDED;
      state.responseAuth = action.payload;
    }).addCase(authRequest.rejected, (state, action) => {
      state.status = _Constants.FAILED;
      state.error = action.error.message || _Constants.AN_ERR_OCCUR;
    });
  }
});
const selectState = state => state.auth;
const authResponse = exports.authResponse = (0, _toolkit.createSelector)(selectState, state => state.responseAuth);
const authStatus = exports.authStatus = (0, _toolkit.createSelector)(selectState, state => state.status);
const authError = exports.authError = (0, _toolkit.createSelector)(selectState, state => state.error);
var _default = exports.default = authSlice.reducer;
//# sourceMappingURL=AuthRedux.js.map