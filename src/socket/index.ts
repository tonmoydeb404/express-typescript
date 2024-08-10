import { corsOptions } from "@/config/cors.config";
import { Server } from "http";
import { Server as SocketServer } from "socket.io";
import roomSocket from "./room.socket";

const initSocket = (server: Server) => {
  const io = new SocketServer(server, { cors: corsOptions });

  roomSocket(io);

  return io;
};

export default initSocket;
