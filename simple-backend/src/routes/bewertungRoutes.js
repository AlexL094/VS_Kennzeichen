import express from "express";
import {
  getBewertung,
  getBewertungById,
  putBewertungValidators,
  newBewertungValidators,
  putBewertung,
  addBewertung,
  deleteBewertung,
  getBewertungByTitle,
} from "../controllers/bewertungController.js";

const router = express.Router();



router.get("/", getBewertung);
router.get("/search", getBewertungByTitle);
router.get("/:id", getBewertungById);
router.put("/put/:id", putBewertungValidators, putBewertung);
router.post("/add", newBewertungValidators, addBewertung);
router.delete("/delete/:id", deleteBewertung);

export default router;