import express from "express";

const app = express();

// SERVER HEALTH ROUTE
app.get("/", (req, res) => {
  res.send("Server health is okay. ✅");
});

export default app;
