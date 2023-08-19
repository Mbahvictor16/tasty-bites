import { Router } from "express";
import { getDocs } from "../controller/docs/docs";
import { docsRouter } from "../types";

const router = Router();

router.get("/", getDocs);

export default router as docsRouter;
