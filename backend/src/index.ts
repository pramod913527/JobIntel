import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "jobscout-backend" });
});

app.listen(4000, () => {
  console.log("Backend listening on http://localhost:4000");
});
