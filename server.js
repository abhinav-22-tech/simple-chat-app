const io = require("socket.io")(process.env.PORT || 3000, {
  cors: {
    origin: "*",
  },
});

// io.on("connection", (socket) => {
//   console.log("user connected");
// });

io.on("connection", (socket) => {
  socket.on("chat-message", (msg) => {
    io.emit("chat-message", msg);
    console.log(msg);
  });
});

io.on("connection", (client) => {
  client.emit("init", { data: "hello world" });
});
