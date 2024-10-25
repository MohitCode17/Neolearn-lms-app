import express from "express";
import {
  handleLogin,
  handleRegister,
} from "../../controllers/auth/auth.controller.js";

const router = express.Router();

// REGISTER USER ROUTE
router.post("/register", handleRegister);

// LOGIN USER ROUTE
router.post("/login", handleLogin);

export default router;
