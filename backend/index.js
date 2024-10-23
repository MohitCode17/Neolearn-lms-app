import app from "./app.js";

const startServer = async () => {
  const PORT = 8000;
  app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));
};

startServer();
