import express from "express";
import { handleRegister } from "../../controllers/auth/auth.controller.js";

const router = express.Router();

// REGISTER USER ROUTE
router.post("/register", handleRegister);

export default router;
