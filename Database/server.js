// Server file to connect node with MongoDB
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import ConnectDB from "./config/database.js";
import router from "./routes/api.js";
import bodyParser from "body-parser"; // Use ES module syntax

const app = express();

// Middleware to handle JSON and URL-encoded data
app.use(bodyParser.json()); // Parses incoming JSON requests
app.use(bodyParser.urlencoded({ extended: true })); // Parses URL-encoded data

// Enable CORS for all origins
app.use(cors());

// Use API router
app.use('/api/v1', router);

// Connect to MongoDB using an async function
ConnectDB();

// Export server and listen on a specified port
const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
