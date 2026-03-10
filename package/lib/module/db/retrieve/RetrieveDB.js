"use strict";

import { getDB } from "../config/DbConfig.js";
import { DATABASE_NOT_INITIALIZED, ERR_NO_CONTENT_DELIVERY_FOUND, ERR_NO_LOCATION_FOUND, UCCESS_MSG_RETRIEVE_ALL_LOCATION, SUCCESS_MSG_RETRIEVE_CONTENT_DELIVERY, SUCCESS_MSG_RETRIEVE_LOCATION } from "../../constants/Constants.js";
/**
 * Retrieves location data from the local database.
 * @returns {Promise<any[] | null>} The location data or null if no data is found or an error occurs.
 */
export const getLocationInDB = async () => {
  try {
    const db = getDB();
    if (!db) {
      return {
        status: false,
        message: DATABASE_NOT_INITIALIZED,
        data: null
      };
    }
    const locationSelect = await db.getAllAsync('SELECT * FROM location');
    if (!locationSelect || locationSelect.length === 0) {
      return {
        status: false,
        message: ERR_NO_LOCATION_FOUND,
        data: null
      };
    }
    return {
      status: true,
      message: UCCESS_MSG_RETRIEVE_ALL_LOCATION,
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
export const getLastLocationInDB = async () => {
  try {
    const db = getDB();
    if (!db) {
      return {
        status: false,
        message: DATABASE_NOT_INITIALIZED,
        data: null
      };
    }
    const latestLocation = await db.getFirstAsync('SELECT * FROM location ORDER BY id DESC LIMIT 1');
    if (!latestLocation) {
      return {
        status: false,
        message: ERR_NO_LOCATION_FOUND,
        data: null
      };
    }
    return {
      status: true,
      message: SUCCESS_MSG_RETRIEVE_LOCATION,
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
export const getContentDeliveryInDB = async () => {
  try {
    const db = getDB();
    if (!db) {
      return {
        status: false,
        message: DATABASE_NOT_INITIALIZED,
        data: null
      };
    }
    const selectQuery = await db.getAllAsync('SELECT * FROM content_delivery');
    if (!selectQuery || selectQuery.length === 0) {
      return {
        status: false,
        message: ERR_NO_CONTENT_DELIVERY_FOUND,
        data: null
      };
    }
    return {
      status: true,
      message: SUCCESS_MSG_RETRIEVE_CONTENT_DELIVERY,
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
//# sourceMappingURL=RetrieveDB.js.map