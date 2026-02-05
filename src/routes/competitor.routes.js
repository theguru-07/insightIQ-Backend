import express from "express";
import {
  createCompetitor,
  getCompetitors,
  getCompetitorById,
  updateCompetitor,
  deleteCompetitor,
} from "../controllers/competitor.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.use(authMiddleware);

router.post("/", createCompetitor);
router.get("/", getCompetitors);
router.get("/:id", getCompetitorById);
router.put("/:id", updateCompetitor);
router.delete("/:id", deleteCompetitor);

export default router;
