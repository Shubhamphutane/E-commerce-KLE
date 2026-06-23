const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("Mongo URL:", process.env.MONGO_URL);

    await mongoose.connect(process.env.MONGO_URL);

    console.log("✅ Database connected");
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;