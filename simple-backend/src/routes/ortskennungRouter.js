import express from "express";
import {
  getOrtskennung,
  getOrtskennungById,
  putOrtskennungValidators,
  newOrtskennungValidators,
  putOrtskennung,
  addOrtskennung,
  deleteOrtskennung,
  getOrtskennungByOrtsk├╝rzel,
} from "../controllers/ortskennungController.js";

const router = express.Router();

// Die verschiedenen CRUD Operations
router.get("/", getOrtskennung);
router.get("/search", getOrtskennungByOrtsk├╝rzel);
router.get("/:id", getOrtskennungById);
router.put("/put/:id", putOrtskennungValidators, putOrtskennung);
router.post("/add", newOrtskennungValidators, addOrtskennung);
router.delete("/delete/:id", deleteOrtskennung);

export default router;