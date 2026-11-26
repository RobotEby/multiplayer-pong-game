import http from "node:http";
import { Server } from "socket.io";
import app from "./app.js";

const httpServer = http.createServer(app);
const io = new Server(httpServer);

io.on("connection", (socket) => {
  console.log(`connected: ${socket.id}`);
  socket.on("disconnect", (reason) =>
    console.log(`disconnected: ${socket.id} (${reason})`),
  );
});

const PORT = process.env.PORT ?? 3000;
httpServer.listen(PORT, () =>
  console.log(`listening on http://localhost:${PORT}`),
);

export { app, httpServer, io };
