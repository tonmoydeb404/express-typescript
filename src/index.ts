import { initEnvConfig } from "./config/env.config";
initEnvConfig(); // initialize env config

import { createServer } from "http";
import app from "./app";
import initSocket from "./socket";

// initialize http server
const server = createServer(app);

// initialize socket io
const io = initSocket(server);
app.set("io", io);

const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
