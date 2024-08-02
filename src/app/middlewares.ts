import { corsOptions } from "@/config/cors.config";
import cors from "cors";
import { json, urlencoded } from "express";
import helmet from "helmet";
import morgan from "morgan";

const middlewares = [
  json(), // parsing application/json
  urlencoded({ extended: true }), // parsing application/x-www-form-urlencoded
  cors(corsOptions), // enable cross-origin resource sharing
  helmet(), // helps to secure various HTTP headers
  morgan("tiny"), // http request logger
];

export default middlewares;
