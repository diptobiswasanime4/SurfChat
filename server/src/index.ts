const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 3000;

const io = require("socket.io")(PORT, {
  cors: {
    origin: "*",
  },
});

io.on("connection", async (socket) => {
  await socket.emit("chat-message", "First message from server.");

  await socket.on("send-chat-message", async (msg) => {
    console.log(msg);
    await socket.emit("chat-message", msg);
  });
});
