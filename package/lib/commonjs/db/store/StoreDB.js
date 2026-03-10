"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storeLocationInDB = exports.storeContentDeliveryInDB = void 0;
var _DbConfig = require("../config/DbConfig.js");
var _Constants = require("../../constants/Constants.js");
/**
 * Stores location data into the database.
 * @param location The location data to be saved.
 * @returns {Promise<string>} A string message indicating success or failure.
 */
const storeLocationInDB = async location => {
  try {
    const db = (0, _DbConfig.getDB)();
    if (!db) {
      console.error('Database is not initialized');
      return {
        status: false,
        msg: _Constants.DATABASE_NOT_INITIALIZED
      };
    }

    // Insert the location data into the database
    const insertQuery = 'INSERT INTO location (location) VALUES ($location)';
    const locationInsert = await db.prepareAsync(insertQuery);
    await locationInsert.executeAsync({
      $location: location
    });
    return {
      status: false,
      msg: _Constants.LOCATION_DATA_SAVE_TO_DB
    };
  } catch (error) {
    console.error('Error saving location to database:', error);
    return {
      status: false,
      msg: error.message || _Constants.LOCATION_DATA_WAS_NOT_INSERTED
    };
  }
};
exports.storeLocationInDB = storeLocationInDB;
const storeContentDeliveryInDB = async content_delivery => {
  try {
    const db = (0, _DbConfig.getDB)();
    if (!db) {
      return {
        status: false,
        msg: _Constants.DATABASE_NOT_INITIALIZED
      };
    }

    // Insert the content delivery data into the database
    const insertQuery = 'INSERT INTO content_delivery (content_delivery) VALUES ($content_delivery)';
    const insert = await db.prepareAsync(insertQuery);
    await insert.executeAsync({
      content_delivery: content_delivery
    });
    return {
      status: false,
      msg: _Constants.CONTENT_DELIVERY_DATA_SAVE_TO_DB
    };
  } catch (error) {
    console.error('Error saving location to database:', error);
    return {
      status: false,
      msg: error.message || _Constants.CONTENT_DELIVERY_WAS_NOT_INSERTED
    };
  }
};
exports.storeContentDeliveryInDB = storeContentDeliveryInDB;
//# sourceMappingURL=StoreDB.js.map