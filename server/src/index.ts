const dotenv = require("dotenv");
const { v4 } = require("uuid");

dotenv.config();

const PORT = process.env.PORT || 3000;

const io = require("socket.io")(PORT, {
  cors: {
    origin: "*",
  },
});

let users = [];

io.on("connection", async (socket) => {
  await socket.emit("chat-message", "First message from server.");

  await socket.on("send-user-connected", async (user) => {
    console.log(user);

    users.push({ socketId: socket.id, id: user.id, name: user.name });
    await socket.broadcast.emit("total-users", users.length);
    console.log(users);

    await socket.broadcast.emit("user-connected", user.name);
  });

  await socket.on("send-chat-message", async (data) => {
    console.log(`${data.user}: ${data.text}`);
    await socket.broadcast.emit("chat-message", data);
  });

  await socket.on("disconnect", async () => {
    const disconnectedUser = users.find((user) => user.socketId == socket.id);
    await socket.broadcast.emit("user-disconnected", disconnectedUser);

    users = users.filter((user) => user.socketId != socket.id);
    await socket.broadcast.emit("total-users", users.length);
    console.log(users);
  });
});
