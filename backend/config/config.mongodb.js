import mongoose from "mongoose";

const mongoDbConfig = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI);
    if (connection) {
      console.log("MongoDB, Connection successful");
    } else {
      console.log("MongoDB, Connecton failed");
    }
  } catch (err) {
    console.log("MongoDB, Something went wrong in mongoDB connection");
  }
};

export default mongoDbConfig;
