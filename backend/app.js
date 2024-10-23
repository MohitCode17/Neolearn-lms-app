import express from "express";
import { errorMiddleware } from "./middlewares/error.js";

const app = express();

// SERVER HEALTH ROUTE
app.get("/", (req, res) => {
  res.send("Server health is okay. ✅");
});

// ERROR MIDDLEWARE
app.use(errorMiddleware);

export default app;
