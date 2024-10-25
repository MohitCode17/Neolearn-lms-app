import express from "express";
import { errorMiddleware } from "./middlewares/error.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { config } from "./config/env.config.js";

import authRoutes from "./routes/auth/auth.route.js";

const app = express();

// CORS CONFIG
app.use(
  cors({
    origin: config.FRONTEND_URL,
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
  })
);

// DEFAULT MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// SERVER HEALTH ROUTE
app.get("/", (req, res) => {
  res.send("Server health is okay. ✅");
});

// ROUTES
app.use("/api/auth", authRoutes);

// ERROR MIDDLEWARE
app.use(errorMiddleware);

export default app;
