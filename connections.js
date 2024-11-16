const mongoose = require("mongoose");

async function handleMongoDbConnection() {
  return mongoose
    .connect("mongodb://127.0.0.1:27017/newDb")
    .then(() => console.log(`Connected to MongoDB`))
    .catch((err) => console.log(`Error connecting mongodb ${err}`));
}

module.exports = {
    handleMongoDbConnection,
}
