import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/auth.js";
import articleRoutes from "./routes/article.js";

dotenv.config();

const app = express();

/* =====================
   MIDDLEWARE
===================== */

// ✅ CORS — REQUIRED for Vercel frontend
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://my-app-eight-roan-18.vercel.app",
      "https://my-dr42q4b37-keis-projects-f1661b55.vercel.app",
    ],
    credentials: true,
  })
);

app.use(express.json());

/* =====================
   ROUTES
===================== */

app.use("/api/auth", authRoutes);
app.use("/api/articles", articleRoutes);

// ✅ Health check (Render needs this)
app.get("/", (req, res) => {
  res.send("API is running");
});

/* =====================
   DATABASE
===================== */

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

/* =====================
   SERVER
===================== */

const PORT = process.env.PORT || 10000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});