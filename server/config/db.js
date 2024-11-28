import mongoose from "mongoose";
import colors from "colors";

//create a function to connect with mongodb database
const connectDB = async () => {
  try {
    // use mongoose to connect with mongodb database
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Conneted To Mongodb Database ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Error in Mongodb ${error}`.bgRed.white);
  }
};

export default connectDB;
