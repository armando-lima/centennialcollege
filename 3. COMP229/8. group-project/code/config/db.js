//import db key from .env file
require("dotenv").config();
const DB_KEY = process.env.DB_KEY;

module.exports = {
  URI: DB_KEY,
};
