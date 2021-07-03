const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const http = require('http');
const routes = require('./routes');
const socketio = require(socket.io)

const server = http.Server(app);
const PORT = process.env.PORT || 8000;
const io = socketio(server);

//create function to protect routers
// modify request to decode the tokens


if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

try {
   mongoose.connect(process.env.MONGO_DB_CONNECTION, {
       useNewUrlParser: true,
       useUnifiedTopology: true,
   })
   console.log('MONGODb Connected')
} catch(error) {
     console.log(error);
}

const connectUsers = {};

io.on('connection', socket => {
    const { user } = socket.handshake.query;

    connectUsers[user] = socket.id;
});

app.use((req,res,next) => {
    req.io = io;
    req.connectUsers = connectUsers;
    return next();
})
app.use(cors());
app.use(express.json());
app.use("/files", express.static(path.resolve(__dirname, "..", "..", "files")))

app.use(routes)

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})