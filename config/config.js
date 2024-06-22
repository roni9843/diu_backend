require("dotenv").config();

const config = {
  PORT: process.env.PORT || 8000,
  DB_CONN: `mongodb+srv://organicUser:roni9843@cluster0.tibcl.mongodb.net/diuResult`,
};

module.exports = config;
