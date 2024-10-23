import app from "./app.js";
import { connectDB } from "./config/db.js";

const startServer = async () => {
  await connectDB();

  const PORT = process.env.PORT;
  app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));
};

startServer();
