import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import debug from "debug";
import { connectDB } from "./config/db";
import authRoutes from "./routes/auth";
import jobRoutes from "./routes/job";

dotenv.config();
const log = debug("jobintel:server");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "jobscout-backend" });
});

app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);

const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI || "";

connectDB(MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => {
      log(`Backend listening on http://localhost:${PORT}`);
      // eslint-disable-next-line no-console
      console.log(`Backend listening on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.error("Failed to connect to DB", err);
    process.exit(1);
  });
