import { WebSocketServer } from "ws";
import { prisma } from "@repo/db/prisma";

const server = new WebSocketServer({ port: 8080 });

server.on("connection", async (socket) => {
  await prisma.user.create({
    data: {
      username: Math.random().toString(),
      password: Math.random().toString(),
    },
  });
  socket.on("message", async () => {
    socket.send("Hey there from the ws server");
  });
});
