import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.route.js";
import chatRoutes from "./routes/chat.route.js";

dotenv.config();

const PORT = process.env.PORT || 5001;
const app = express();

app.use("/api/auth", authRoutes);
app.use("/api/chat", chatRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
