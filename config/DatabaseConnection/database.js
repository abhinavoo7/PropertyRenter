import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  // if database is already connected, don't reconnect
  if (connected) {
    console.log("Mongo already connected....");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
    console.log("MongoDB conected....");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
