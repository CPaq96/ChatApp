const path = require('path');
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io-client')(http);

app.use("/static", express.static(path.join(__dirname, "public")));
app.get("/", (req, resp) => {
    resp.sendFile(__dirname + "/public/chat-adv-client.html");
});

io.on("connection", (socket) => {
    socket.on("join", msg => {
        socket.username = msg;
        const obj = { user: socket.username, message: msg};
        io.emit("new user", obj);
    });

    socket.on("chat from client", msg => {
        const obj = { user: socket.username, message: msg};
        io.emit("chat from server", obj);
    });
});

http.listen(7000, () => {
    console.log("listening on 7000");
});