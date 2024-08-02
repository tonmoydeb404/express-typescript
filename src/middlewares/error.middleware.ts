import { ErrorMiddleware } from "@/types/middleware";
import createHttpError from "http-errors";

const errorMiddleware: ErrorMiddleware = (err, req, res, next) => {
  let statusCode = 500;
  let message = err?.message || "Something wents to wrong.";

  if (createHttpError.isHttpError(err)) {
    statusCode = err.statusCode;
  }

  res.status(statusCode);
  res.json({
    status: statusCode,
    message: message,
  });
};

export default errorMiddleware;
