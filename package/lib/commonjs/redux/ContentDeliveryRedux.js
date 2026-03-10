"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.contentDeliveryStatus = exports.contentDeliveryResponse = exports.contentDeliveryReq = exports.contentDeliveryError = void 0;
var _toolkit = require("@reduxjs/toolkit");
var _axios = _interopRequireDefault(require("axios"));
var _Config = _interopRequireDefault(require("../config/Config.js"));
var _Constants = require("../constants/Constants.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const initialState = {
  responseContentDelivery: [],
  status: _Constants.IDLE,
  error: null
};
const contentDeliveryReq = exports.contentDeliveryReq = (0, _toolkit.createAsyncThunk)(_Config.default.contentDelivery, async requestData => {
  try {
    const response = await _axios.default.post(_Config.default.contentDelivery, requestData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});
const contentDeliverySlice = (0, _toolkit.createSlice)({
  name: 'contentDelivery',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(contentDeliveryReq.pending, state => {
      state.status = _Constants.LOADING;
    }).addCase(contentDeliveryReq.fulfilled, (state, action) => {
      state.status = _Constants.SUCCEEDED;
      state.responseContentDelivery = action.payload;
    }).addCase(contentDeliveryReq.rejected, (state, action) => {
      state.status = _Constants.FAILED;
      state.error = action.error.message || _Constants.AN_ERR_OCCUR;
    });
  }
});
const selectState = state => state.contentDelivery;
const contentDeliveryResponse = exports.contentDeliveryResponse = (0, _toolkit.createSelector)(selectState, state => state.responseContentDelivery);
const contentDeliveryStatus = exports.contentDeliveryStatus = (0, _toolkit.createSelector)(selectState, state => state.status);
const contentDeliveryError = exports.contentDeliveryError = (0, _toolkit.createSelector)(selectState, state => state.error);
var _default = exports.default = contentDeliverySlice.reducer;
//# sourceMappingURL=ContentDeliveryRedux.js.map