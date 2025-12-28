import express from "express";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

// TEMP SAMPLE (YOU CAN CONNECT MONGOOSE LATER)
router.get("/", (req, res) => {
  res.json([]);
});

router.post("/", authMiddleware, (req, res) => {
  res.json({ message: "Article created" });
});

router.delete("/:id", authMiddleware, (req, res) => {
  res.json({ message: "Article deleted" });
});

export default router;