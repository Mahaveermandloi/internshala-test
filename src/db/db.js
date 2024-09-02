// import mongoose from "mongoose";

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.DB_URL);
    
//     console.log("Database connected successfully");
//   } catch (error) {
//     console.error("Database connection failed", error.message);
//     console.error("Error stack:", error.stack);
//     process.exit(1);
//   }
// };

// export default connectDB;


import app from './app.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
