//1. import experess
// const express = require("express");
// const colors = require("colors");
import express from "express";
// import colors from "colors/index.js";
import cors from "cors";
import colors from "colors";
colors.enable();

import categoryRoutes from "./routes/categoryRoutes.js";

//6 import dotenv
import dotenv from "dotenv";

//8 import morgan
import morgan from "morgan";

// 9 import connectDB
import connectDB from "./config/db.js";

//12. import authRoute.js
import authRoutes from "./routes/authRoute.js";

import productRoutes from "./routes/productRoutes.js";
//2. create rest object of express
const app = express();

// 7 configure env
dotenv.config();

// 10 config morgan: m
//middelwares
// app.use(cors());
//enabe json.. we can send json data in request and response
app.use(express.json()); // Middleware for parsing JSON in the request body
app.use(morgan("dev"));
app.use(cors());

// 11.database config- connect to databse
connectDB();

//13. routes
app.use("/api/v1/auth", authRoutes);
// app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

app.use("/api/v1/category", categoryRoutes);

// 3. rest api
app.get("/", (req, res) => {
  res.send(
    // {
    //   message: "API is Running",
    // }

    "<h1> My API is running</h1>"
  );
});

// 4. PORT
// const PORT = 8080;
const PORT = process.env.PORT || 8080;

//5. run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgWhite
      .black
  );
});
