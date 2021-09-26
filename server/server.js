const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const PORT = process.env.PORT || 3000;

app.use(express.static("../frontend"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  socket.on("chat-message", (msg) => {
    io.emit("chat-message", msg);
  });
});

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
