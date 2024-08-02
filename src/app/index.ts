import errorMiddleware from "@/middlewares/error.middleware";
import express from "express";
import middlewares from "./middlewares";
import router from "./routes";

const app = express();

// middlewares
app.use(middlewares);

// router
app.use("/api", router);

// error middleware
app.use(errorMiddleware);

export default app;
