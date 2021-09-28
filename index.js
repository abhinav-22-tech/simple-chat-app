import {io} from "socket.io-client";

const socket = io("https://simple-chats-server.herokuapp.com/");

socket.on("init", handleInit);

function handleInit(msg){
  console.log(msg);
}

// let form = document.getElementById("form");
// let input = document.getElementById("input");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   if (input.value) {
//     socket.emit("chat-message", input.value);
//     input.value = "";
//   }
// });

// socket.on("chat-message", function (msg) {
//   let item = document.createElement("li");
//   item.textContent = msg;
//   messages.appendChild(item);
//   window.scrollTo(0, document.body.scrollHeight);
// });
