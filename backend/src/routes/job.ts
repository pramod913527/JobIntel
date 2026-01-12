import { Router } from "express";
import { createJob, getJob, listJobs, ingestJob } from "../controllers/jobController";

const router = Router();

router.post("/", createJob);
router.get("/", listJobs);
router.get(":id", getJob);
router.post("/ingest", ingestJob);

export default router;
