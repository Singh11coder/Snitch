import express from "express";
import { registerValidator } from "../validators/auth.validator.js"; 
import { registerUser } from "../controllers/auth.controllers.js";
const router = express.Router();

router.post("/register",registerValidator,registerUser);
router.post("/login",)

export default router; 