import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const connect = mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

connect.then(() => {
  console.log("Database connected successfully!");
}).catch((error) => {
  console.error("Database connection failed:", error);
});

export default mongoose;
