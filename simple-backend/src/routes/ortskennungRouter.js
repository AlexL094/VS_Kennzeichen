import express from "express";
import {
  getOrtskennung,
  getOrtskennungById,
  putOrtskennungValidators,
  newOrtskennungValidators,
  putOrtskennung,
  addOrtskennung,
  deleteOrtskennung,
  getOrtskennungByTitle,
} from "../controllers/ortskennungController.js";

const router = express.Router();

router.get("/", getOrtskennung);
router.get("/search", getOrtskennungByTitle);
router.get("/:id", getOrtskennungById);
router.put("/put/:id", putOrtskennungValidators, putOrtskennung);
router.post("/add", newOrtskennungValidators, addOrtskennung);
router.delete("/delete/:id", deleteOrtskennung);

export default router;