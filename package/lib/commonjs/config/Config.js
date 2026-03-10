"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setServerConfig = exports.default = void 0;
function jsonConcat(o1, o2) {
  for (const key in o2) {
    if (Object.prototype.hasOwnProperty.call(o2, key)) {
      o1[key] = o2[key];
    }
  }
  return o1;
}
const base = {
  headers: {
    'Content-Type': 'application/json'
  }
};
const setServerConfig = baseUrl => {
  const server = {
    baseURL: baseUrl
  };
  const baseConfig = jsonConcat(base, server);
  const combine = {
    authAPI: `${baseConfig.baseURL}/mobileapi/init`,
    updateLocation: `${baseConfig.baseURL}/mobileapi/geo`,
    contentDelivery: `${baseConfig.baseURL}/mobileapi/content-delivery`,
    reachAPI: `${baseConfig.baseURL}/mobileapi/send`
  };
  return jsonConcat(baseConfig, combine);
};
exports.setServerConfig = setServerConfig;
const config = setServerConfig('');
var _default = exports.default = config;
//# sourceMappingURL=Config.js.map