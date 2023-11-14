import mongoose, { ConnectOptions, Mongoose } from "mongoose";

// Define the MongoDB connection function
export const connectToDatabase = async (): Promise<Mongoose> => {
  try {
    // Connect to MongoDB
    const dbURI: string =
      // process.env.MONGO_URI ||
      "mongodb://localhost:27017/MernBoilerPlateDatabase";
    const options: any = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    // Establish connection
    const connection: Mongoose = await mongoose.connect(dbURI, options);
    return connection;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};

// Call the connect function
connectToDatabase()
  .then((connection: Mongoose) => {
    // Perform operations after successful connection
    // For instance, you might want to start your server here or perform database operations.
  })
  .catch((error: any) => {
    // Handle any error during the connection process
    // For example, you might want to gracefully handle the failure.
  });
