import { Router } from "express";
import { getConfig } from "../controllers/config.controller";
import { requireAppToken } from "../middlewares/apiAuth.middleware";

const router = Router();

router.get("/app-config", requireAppToken, getConfig);

export default router;
