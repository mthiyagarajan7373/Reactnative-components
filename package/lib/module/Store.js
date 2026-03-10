"use strict";

import { configureStore } from '@reduxjs/toolkit';
import authReducer from "./redux/AuthRedux.js";
import locationReducer from "./redux/LocationRedux.js";
import contentDeliveryReducer from "./redux/ContentDeliveryRedux.js";
import reachReducer from "./redux/ReachRedux.js";
const store = configureStore({
  reducer: {
    auth: authReducer,
    location: locationReducer,
    contentDelivery: contentDeliveryReducer,
    reach: reachReducer
  }
});
export default store;
//# sourceMappingURL=Store.js.map