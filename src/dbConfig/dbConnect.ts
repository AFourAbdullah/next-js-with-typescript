import mongoose from "mongoose";

export async function connectDb() {
  try {
    mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;
    connection.on("connected", (data) => {
      console.log(`mongodb connected at ${data.connection.host}`);
    });
    connection.on("error", (error) => {
      console.log(`mongodb connection is in error the error is ${error}`);
    });
  } catch (error) {
    console.log(error);
  }
}
