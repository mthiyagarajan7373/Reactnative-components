"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.locationStatus = exports.locationResponse = exports.locationRequest = exports.locationError = exports.default = void 0;
var _toolkit = require("@reduxjs/toolkit");
var _axios = _interopRequireDefault(require("axios"));
var _Config = _interopRequireDefault(require("../config/Config.js"));
var _Constants = require("../constants/Constants.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const initialState = {
  responseLocation: [],
  status: _Constants.IDLE,
  error: null
};
const locationRequest = exports.locationRequest = (0, _toolkit.createAsyncThunk)(_Config.default.updateLocation, async requestData => {
  try {
    const response = await _axios.default.post(_Config.default.updateLocation, requestData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});
const locationSlice = (0, _toolkit.createSlice)({
  name: 'location',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(locationRequest.pending, state => {
      state.status = _Constants.LOADING;
    }).addCase(locationRequest.fulfilled, (state, action) => {
      state.status = _Constants.SUCCEEDED;
      state.responseLocation = action.payload;
    }).addCase(locationRequest.rejected, (state, action) => {
      state.status = _Constants.FAILED;
      state.error = action.error.message || _Constants.AN_ERR_OCCUR;
    });
  }
});
const selectState = state => state.location;
const locationResponse = exports.locationResponse = (0, _toolkit.createSelector)(selectState, state => state.responseLocation);
const locationStatus = exports.locationStatus = (0, _toolkit.createSelector)(selectState, state => state.status);
const locationError = exports.locationError = (0, _toolkit.createSelector)(selectState, state => state.error);
var _default = exports.default = locationSlice.reducer;
//# sourceMappingURL=LocationRedux.js.map