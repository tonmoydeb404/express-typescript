import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";
import path from "path";

const envFiles = {
  production: ".env.production",
  development: ".env.local",
};

export const initEnvConfig = () => {
  const envFile = envFiles?.[process.env.NODE_ENV] || envFiles.development;

  const envConfig = dotenv.config({
    path: path.resolve(process.cwd(), envFile),
  });
  dotenvExpand.expand(envConfig);
};
