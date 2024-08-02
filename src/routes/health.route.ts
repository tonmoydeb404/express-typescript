import * as healthController from "@/controllers/health.controller";
import { Router } from "express";

const healthRouter = Router();

healthRouter.get("/", healthController.getHealth);

export default healthRouter;
