import mongoose from "mongoose";

//establish connection with MongoDB using a async
const ConnectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDb connected: ${connection.connection.host}`)
  } catch (error) {
    console.error(`Error:${error}`)
  }
};


export default ConnectDB