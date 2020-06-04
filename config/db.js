const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(
    "mongodb://localhost:27017/",
    {
      dbName: "event_logger_db",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => (err ? console.log(err) : null)
  );
  console.log(`Connected to MongoDB: ${conn.connection.host}`);
};

module.exports = connectDB;
