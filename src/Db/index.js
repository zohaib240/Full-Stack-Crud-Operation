import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB Connection Failed!");
    console.error(error.message); // Error ka exact reason yeh dega
  }
};
export default connectDB;
// import mongoose from "mongoose";
// const connectDB = async () => {
//   try {
//     const connectionInstance = await mongoose.connect(
//       `${process.env.MONGO_URI}practice`
//     );
//     console.log(
//       `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
//     );
//   } catch (error) {
//     console.log("MONGODB connection FAILED ", error);
//     process.exit(1);
//   }
// };

// export default connectDB;