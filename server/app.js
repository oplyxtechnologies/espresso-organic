// app.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const contactRoutes = require("./routes/contact");
const enquiryRoutes = require("./routes/enquiry");

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/contact", contactRoutes);
app.use("/api/enquiry", enquiryRoutes);

// Root route for basic health check
app.get("/", (req, res) => {
  res.send("🚀 Espresso Organic Server is Running!");
});

// Optional API status route
app.get("/api/status", (req, res) => {
  res.json({ status: "ok", message: "API is working properly." });
});

// Connect to MongoDB and start the server
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });
