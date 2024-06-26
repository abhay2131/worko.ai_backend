import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/dbConfig.js";

//load enviroment variable from the .env file
dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

// setting up the middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = app.listen(PORT, () => {
  console.log(`Server is running on the Port ${PORT}`);
  connectDB();
});

process.on("unhandledRejection", (err) => {
  console.log(`some Error occurred: ${err}`);
  server.close(() => process.exit(1));
});
