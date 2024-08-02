import { initEnvConfig } from "./config/env.config";
initEnvConfig(); // initialize env config

import app from "./app";

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
