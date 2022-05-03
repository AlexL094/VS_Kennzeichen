import express from "express";
import {
  getTuev,
  getTuevById,
  putTuevValidators,
  newTuevValidators,
  putTuev,
  addTuev,
  deleteTuev,
  getTuevByTitle,
} from "../controllers/TuevController.js";

const router = express.Router();



router.get("/", getTuev);
router.get("/search", getTuevByTitle);
router.get("/:id", getTuevById);
router.put("/put/:id", putTuevValidators, putTuev);
router.post("/add", newTuevValidators, addTuev);
router.delete("/delete/:id", deleteTuev);

export default router;