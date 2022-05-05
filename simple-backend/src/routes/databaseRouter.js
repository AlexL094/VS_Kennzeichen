import express from "express";
import {
  addInitialData,
  deleteAllData,
} from "../controllers/databaseController.js";

const router = express.Router();


router.post("/add", addInitialData);
router.delete("/delete", deleteAllData);

export default router;