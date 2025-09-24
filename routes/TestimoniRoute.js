import express from "express";
import {
  createTestimoni,
  getTestimoni,
} from "../controller/TestimoniController.js";

const router = express.Router();

router.get("/", getTestimoni);
router.post("/", createTestimoni);

export default router;
