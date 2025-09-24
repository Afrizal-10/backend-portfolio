import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import testimoniRoutes from "../routes/TestimoniRoute.js";

dotenv.config();
const app = express();

// Middleware
app.use(
  cors({
    origin: ["http://localhost:5173", "https://your-frontend-domain.com"],
  })
);
app.use(express.json());

// MongoDB Connect
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Error:", err));

// Route
app.use("/api/testimoni", testimoniRoutes);

// Run Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("=====================================");
  console.log(`🚀 Backend running at: http://localhost:${PORT}`);
  console.log("=====================================");
});

// Root route (Health Check)
app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "🚀 Backend portfolio API is running!",
  });
});
