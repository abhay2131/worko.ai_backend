import mongoose from "mongoose";

// Creating schmea for the the user data
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    zip_code: {
      type: String,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

// creating the model based on the above schema
const User = mongoose.model("User", userSchema);

// exporting the model to perform curd operation
export default User;
