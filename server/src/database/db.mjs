import mongoose from "mongoose";

const DBconnection = async () => {
  const DB_URI =
    "mongodb+srv://zainm2432003:pDzTAx4DDKDWJmnL@file-sharing.ructhaf.mongodb.net/?retryWrites=true&w=majority&appName=file-sharing";
  try {
    await mongoose.connect(DB_URI, { useNewUrlParser: true });
    console.log("Database connected sucessfully");
  } catch (error) {
    console.log("Error while connecting with database", error.message);
  }
};

export default DBconnection;
