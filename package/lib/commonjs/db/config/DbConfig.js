"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initDatabase = exports.getDB = exports.createTableIfNotExists = void 0;
var SQLite = _interopRequireWildcard(require("expo-sqlite"));
var _Constants = require("../../constants/Constants.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
let db;

// Create the database and open it asynchronously inside an init function
const initDatabase = async () => {
  try {
    db = await SQLite.openDatabaseAsync(_Constants.FOOT_PRINTS_LOCAL_DB);
    await createTableIfNotExists();
  } catch (error) {
    console.error('Error initializing database:', error);
    throw new Error(error.message);
  }
};

// Function to create tables if they do not exist
exports.initDatabase = initDatabase;
const createTableIfNotExists = async () => {
  try {
    await db.execAsync(`CREATE TABLE IF NOT EXISTS location (id INTEGER PRIMARY KEY AUTOINCREMENT, location TEXT);
      CREATE TABLE IF NOT EXISTS content_delivery (id INTEGER PRIMARY KEY AUTOINCREMENT, content_delivery TEXT);`);
  } catch (error) {
    console.error('Error creating table:', error);
    throw new Error(error.message);
  }
};
exports.createTableIfNotExists = createTableIfNotExists;
const getDB = () => db;
exports.getDB = getDB;
//# sourceMappingURL=DbConfig.js.map