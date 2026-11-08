import express from "express";
import { registerValidator } from "../validators/auth.validator";
import { registerUser } from "../controllers/auth.controllers";
const router = express.Router();

router.post("/register",registerValidator,registerUser);

export default router; 