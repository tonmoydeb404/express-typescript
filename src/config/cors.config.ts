import { CorsOptions } from "cors";

export const corsOptions: CorsOptions = {
  origin: ["http://localhost:5173"],
  credentials: true,
  optionsSuccessStatus: 200,
};
