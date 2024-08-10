import { Server, Socket } from "socket.io";

// ----------------------------------------------------------------------

const events = {
  JOIN_ROOM: "join-room",
  JOINED_ROOM: "joined-room",
  DISCONNECT: "disconnect",
};

// ----------------------------------------------------------------------

const onJoinRoom = (data: any, socket: Socket) => {
  const { roomId } = data;
  socket.join(roomId);

  socket.broadcast.to(roomId).emit(events.JOINED_ROOM, { userId: socket.id });
};

const onDisconnect = (socket: Socket) => {
  console.log("User Disconnected: ", socket.id);
};

// ----------------------------------------------------------------------

const roomSocket = (io: Server) => {
  const chatNamespace = io.of("/socket/room");

  chatNamespace.on("connection", (socket) => {
    console.log("User Connected: ", socket.id);

    socket.on(events.JOIN_ROOM, (d) => onJoinRoom(d, socket));
    socket.on(events.DISCONNECT, () => onDisconnect(socket));
  });
};

export default roomSocket;
