"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reachStatus = exports.reachResponse = exports.reachReq = exports.reachError = exports.default = void 0;
var _toolkit = require("@reduxjs/toolkit");
var _axios = _interopRequireDefault(require("axios"));
var _Config = _interopRequireDefault(require("../config/Config.js"));
var _Constants = require("../constants/Constants.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const initialState = {
  responseReach: [],
  status: _Constants.IDLE,
  error: null
};
const reachReq = exports.reachReq = (0, _toolkit.createAsyncThunk)(_Config.default.reachAPI, async requestData => {
  try {
    const response = await _axios.default.post(_Config.default.reachAPI, requestData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});
const reachSlice = (0, _toolkit.createSlice)({
  name: 'reach',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(reachReq.pending, state => {
      state.status = _Constants.LOADING;
    }).addCase(reachReq.fulfilled, (state, action) => {
      state.status = _Constants.SUCCEEDED;
      state.responseReach = action.payload;
    }).addCase(reachReq.rejected, (state, action) => {
      state.status = _Constants.FAILED;
      state.error = action.error.message || _Constants.AN_ERR_OCCUR;
    });
  }
});
const selectState = state => state.reach;
const reachResponse = exports.reachResponse = (0, _toolkit.createSelector)(selectState, state => state.responseReach);
const reachStatus = exports.reachStatus = (0, _toolkit.createSelector)(selectState, state => state.status);
const reachError = exports.reachError = (0, _toolkit.createSelector)(selectState, state => state.error);
var _default = exports.default = reachSlice.reducer;
//# sourceMappingURL=ReachRedux.js.map