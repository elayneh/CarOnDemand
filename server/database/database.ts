import mongoose, { ConnectOptions, Mongoose } from "mongoose";

// Define the MongoDB connection function
export const connectToDatabase = async (): Promise<Mongoose> => {
  try {
    // Connect to MongoDB
    const dbURI: string = "mongodb://localhost:27017/MernBoilerPlateDatabase";
    // process.env.MONGO_URI ||
    // "" ||
    // "mongodb+srv://MernBoilerPlate:MernBoilerPlatePassword@cluster0.wko3ywv.mongodb.net/MernBoilerPlateDatabase?retryWrites=true&w=majority";
    if (!dbURI) {
      throw new Error("MONGO_URI environment variable is not set");
    }
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
