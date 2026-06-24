const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const router = require('./routes/mainroutes');

dotenv.config();

const PORT = process.env.PORT || 30001;
const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://shivamdevraj02:Devraj@airbnb.emxj8xf.mongodb.net/contact?retryWrites=true&w=majority";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });

// Routes
app.use('/', router);

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Not found' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
