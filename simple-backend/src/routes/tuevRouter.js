import express from "express";
import {
  getTuev,
  getTuevById,
  putTuevValidators,
  newTuevValidators,
  putTuev,
  addTuev,
  deleteTuev,
  getTuevByKennzeichen,
} from "../controllers/TuevController.js";

const router = express.Router();


// Die verschiedenen CRUD Operations
router.get("/", getTuev);
router.get("/search", getTuevByKennzeichen);
router.get("/:id", getTuevById);
router.put("/put/:id", putTuevValidators, putTuev);
router.post("/add", newTuevValidators, addTuev);
router.delete("/delete/:id", deleteTuev);

export default router;