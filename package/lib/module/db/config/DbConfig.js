"use strict";

import * as SQLite from 'expo-sqlite';
import { FOOT_PRINTS_LOCAL_DB } from "../../constants/Constants.js";
let db;

// Create the database and open it asynchronously inside an init function
export const initDatabase = async () => {
  try {
    db = await SQLite.openDatabaseAsync(FOOT_PRINTS_LOCAL_DB);
    await createTableIfNotExists();
  } catch (error) {
    console.error('Error initializing database:', error);
    throw new Error(error.message);
  }
};

// Function to create tables if they do not exist
export const createTableIfNotExists = async () => {
  try {
    await db.execAsync(`CREATE TABLE IF NOT EXISTS location (id INTEGER PRIMARY KEY AUTOINCREMENT, location TEXT);
      CREATE TABLE IF NOT EXISTS content_delivery (id INTEGER PRIMARY KEY AUTOINCREMENT, content_delivery TEXT);`);
  } catch (error) {
    console.error('Error creating table:', error);
    throw new Error(error.message);
  }
};
export const getDB = () => db;
//# sourceMappingURL=DbConfig.js.map