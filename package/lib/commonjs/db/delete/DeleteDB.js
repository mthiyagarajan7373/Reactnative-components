"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteTableItemInDB = exports.deleteTableInDB = void 0;
var _DbConfig = require("../config/DbConfig.js");
var _Constants = require("../../constants/Constants.js");
/**
 * Deletes a table from the local database.
 * @param tableName The name of the table to delete.
 */
const deleteTableInDB = async tableName => {
  try {
    const db = (0, _DbConfig.getDB)();
    if (!db) {
      return {
        status: false,
        message: _Constants.DATABASE_NOT_INITIALIZED
      };
    }
    const query = `DROP TABLE ${tableName};`;
    await db.execAsync(query);
    return {
      status: true,
      message: _Constants.SUCCESS_MSG_DELETE_LOCATION_TABLE
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
exports.deleteTableInDB = deleteTableInDB;
const deleteTableItemInDB = async (tableName, id) => {
  try {
    const db = (0, _DbConfig.getDB)();
    if (!db) {
      return {
        status: false,
        message: _Constants.DATABASE_NOT_INITIALIZED
      };
    }
    const query = `DELETE FROM ${tableName} WHERE id = $id;`;
    await db.runAsync(query, {
      $id: id
    });
    return {
      status: true,
      message: _Constants.SUCCESS_MSG_DELETE_LOCATION_TABLE_ITEM
    };
  } catch (error) {
    console.error(`Error deleting table ${tableName}:`, error.message, error.stack);
    return {
      status: false,
      message: error.message
    };
  }
};
exports.deleteTableItemInDB = deleteTableItemInDB;
//# sourceMappingURL=DeleteDB.js.map