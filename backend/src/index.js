import express from "express";
import dotenv from "dotenv";
import cookqqieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js";
import chatRoutes from "./routes/chat.route.js";
import { connectDB } from "./lib/db.js";

dotenv.config();

const PORT = process.env.PORT || 5001;
const app = express();

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(cookqqieParser());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
