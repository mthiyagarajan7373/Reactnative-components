"use strict";

import { getDB } from "../config/DbConfig.js";
import { CONTENT_DELIVERY_DATA_SAVE_TO_DB, CONTENT_DELIVERY_WAS_NOT_INSERTED, DATABASE_NOT_INITIALIZED, LOCATION_DATA_SAVE_TO_DB, LOCATION_DATA_WAS_NOT_INSERTED } from "../../constants/Constants.js";
/**
 * Stores location data into the database.
 * @param location The location data to be saved.
 * @returns {Promise<string>} A string message indicating success or failure.
 */
export const storeLocationInDB = async location => {
  try {
    const db = getDB();
    if (!db) {
      console.error('Database is not initialized');
      return {
        status: false,
        msg: DATABASE_NOT_INITIALIZED
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
      msg: LOCATION_DATA_SAVE_TO_DB
    };
  } catch (error) {
    console.error('Error saving location to database:', error);
    return {
      status: false,
      msg: error.message || LOCATION_DATA_WAS_NOT_INSERTED
    };
  }
};
export const storeContentDeliveryInDB = async content_delivery => {
  try {
    const db = getDB();
    if (!db) {
      return {
        status: false,
        msg: DATABASE_NOT_INITIALIZED
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
      msg: CONTENT_DELIVERY_DATA_SAVE_TO_DB
    };
  } catch (error) {
    console.error('Error saving location to database:', error);
    return {
      status: false,
      msg: error.message || CONTENT_DELIVERY_WAS_NOT_INSERTED
    };
  }
};
//# sourceMappingURL=StoreDB.js.map