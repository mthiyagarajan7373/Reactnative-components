"use strict";

import { getDB } from "../config/DbConfig.js";
import { DATABASE_NOT_INITIALIZED, SUCCESS_MSG_DELETE_LOCATION_TABLE, SUCCESS_MSG_DELETE_LOCATION_TABLE_ITEM } from "../../constants/Constants.js";
/**
 * Deletes a table from the local database.
 * @param tableName The name of the table to delete.
 */
export const deleteTableInDB = async tableName => {
  try {
    const db = getDB();
    if (!db) {
      return {
        status: false,
        message: DATABASE_NOT_INITIALIZED
      };
    }
    const query = `DROP TABLE ${tableName};`;
    await db.execAsync(query);
    return {
      status: true,
      message: SUCCESS_MSG_DELETE_LOCATION_TABLE
    };
  } catch (error) {
    console.error(`Error deleting table ${tableName}:`, error.message, error.stack);
    return {
      status: false,
      message: error.message
    };
  }
};

/**
 * Deletes a table from the local database.
 * @param tableName The name of the table to delete.
 */
export const deleteTableItemInDB = async (tableName, id) => {
  try {
    const db = getDB();
    if (!db) {
      return {
        status: false,
        message: DATABASE_NOT_INITIALIZED
      };
    }
    const query = `DELETE FROM ${tableName} WHERE id = $id;`;
    await db.runAsync(query, {
      $id: id
    });
    return {
      status: true,
      message: SUCCESS_MSG_DELETE_LOCATION_TABLE_ITEM
    };
  } catch (error) {
    console.error(`Error deleting table ${tableName}:`, error.message, error.stack);
    return {
      status: false,
      message: error.message
    };
  }
};
//# sourceMappingURL=DeleteDB.js.map