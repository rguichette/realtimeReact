import * as express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { cors: {
    origin: '*',
  }});




let port = 5000;

io.on("connection", (socket) => {
    // ...
    console.log("connected");
    
  });




// TODO: remember to send static file HERE
httpServer.listen(port, ()=>{
    console.log("server Started on port: ",port );
    
});


