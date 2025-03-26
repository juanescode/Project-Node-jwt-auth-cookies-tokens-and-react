import moongose from "mongoose";

export const connectDb = async () => {
  try {
    await moongose.connect("mongodb://localhost:27017/ejemplo");
    console.log("db is connected")
  } catch (error) {
    console.log(error);
  }
};
