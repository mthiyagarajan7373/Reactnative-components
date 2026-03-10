"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLocationInDB = exports.getLastLocationInDB = exports.getContentDeliveryInDB = void 0;
var _DbConfig = require("../config/DbConfig.js");
var _Constants = require("../../constants/Constants.js");
/**
 * Retrieves location data from the local database.
 * @returns {Promise<any[] | null>} The location data or null if no data is found or an error occurs.
 */
const getLocationInDB = async () => {
  try {
    const db = (0, _DbConfig.getDB)();
    if (!db) {
      return {
        status: false,
        message: _Constants.DATABASE_NOT_INITIALIZED,
        data: null
      };
    }
    const locationSelect = await db.getAllAsync('SELECT * FROM location');
    if (!locationSelect || locationSelect.length === 0) {
      return {
        status: false,
        message: _Constants.ERR_NO_LOCATION_FOUND,
        data: null
      };
    }
    return {
      status: true,
      message: _Constants.UCCESS_MSG_RETRIEVE_ALL_LOCATION,
      data: locationSelect
    };
  } catch (error) {
    return {
      status: false,
      message: error.message,
      data: null
    };
  }
};
exports.getLocationInDB = getLocationInDB;
const getLastLocationInDB = async () => {
  try {
    const db = (0, _DbConfig.getDB)();
    if (!db) {
      return {
        status: false,
        message: _Constants.DATABASE_NOT_INITIALIZED,
        data: null
      };
    }
    const latestLocation = await db.getFirstAsync('SELECT * FROM location ORDER BY id DESC LIMIT 1');
    if (!latestLocation) {
      return {
        status: false,
        message: _Constants.ERR_NO_LOCATION_FOUND,
        data: null
      };
    }
    return {
      status: true,
      message: _Constants.SUCCESS_MSG_RETRIEVE_LOCATION,
      data: latestLocation
    };
  } catch (error) {
    return {
      status: false,
      message: error.message,
      data: null
    };
  }
};
exports.getLastLocationInDB = getLastLocationInDB;
const getContentDeliveryInDB = async () => {
  try {
    const db = (0, _DbConfig.getDB)();
    if (!db) {
      return {
        status: false,
        message: _Constants.DATABASE_NOT_INITIALIZED,
        data: null
      };
    }
    const selectQuery = await db.getAllAsync('SELECT * FROM content_delivery');
    if (!selectQuery || selectQuery.length === 0) {
      return {
        status: false,
        message: _Constants.ERR_NO_CONTENT_DELIVERY_FOUND,
        data: null
      };
    }
    return {
      status: true,
      message: _Constants.SUCCESS_MSG_RETRIEVE_CONTENT_DELIVERY,
      data: selectQuery
    };
  } catch (error) {
    return {
      status: false,
      message: error.message,
      data: null
    };
  }
};
exports.getContentDeliveryInDB = getContentDeliveryInDB;
//# sourceMappingURL=RetrieveDB.js.map