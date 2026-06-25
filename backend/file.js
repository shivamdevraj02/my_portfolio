const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

const router = require("./routes/mainroutes");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 30001;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("MONGO_URI is missing");
  process.exit(1);
}

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// API
app.use("/api", router);

// React Static Files
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// React Routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});