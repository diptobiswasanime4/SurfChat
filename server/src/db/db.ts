const mongoose = require("mongoose");

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.log(`Failed to connect to DB.`, error);
  }
}
