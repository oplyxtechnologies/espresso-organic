const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

const contactRoutes = require("./routes/contact");
const enquiryRoutes = require("./routes/enquiry");

dotenv.config();

const app = express();

// ---------------------
// ✅ Middlewares
// ---------------------

// Security headers
app.use(helmet());

// Logging
if (process.env.NODE_ENV === "production") {
  app.use(morgan("combined")); // for Nginx log tailing
} else {
  app.use(morgan("dev")); // pretty logs for local dev
}

// Body parser
app.use(express.json());

// CORS for Vercel + domain
const allowedOrigins = [
  "https://expressocoffee.com.np",
  "https://espresso-organic.vercel.app/",
];

app.use(
  cors({
    origin: (origin, callback) => {
      // allow requests with no origin (like mobile apps or curl)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

// ---------------------
// ✅ Routes
// ---------------------
app.use("/api/contact", contactRoutes);
app.use("/api/enquiry", enquiryRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("🚀 Espresso Organic Server is Running!");
});

// Status check
app.get("/api/status", (req, res) => {
  res.json({ status: "ok", message: "API is working properly." });
});

// ---------------------
// ✅ Connect to MongoDB & Start Server
// ---------------------
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });

// ---------------------
// ✅ Global Error Handler (Optional)
// ---------------------
app.use((err, req, res, next) => {
  console.error("🔥 Global error:", err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});
