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
    console.log("connected");

    //listen to offer and send call details (offer) to recipient
    socket.on('offer', (data)=>{
      // console.log(data);
      socket.to(data.callMeta.callee).emit("offer",{offer: data.offer, caller: data.callMeta.caller} )
      
    })

    socket.on('answer', (data)=>{
      socket.to(data.caller).emit("answer", {answer:data.answer})
    // console.log(data);

    })

    socket.on('candidate', (data)=>{
      console.log(data);
      
      socket.to(data.callMeta.callee).emit('candidate', data)
    })


  });

   


// TODO: remember to send static file HERE
httpServer.listen(port, ()=>{
    console.log("server Started on port: ",port );
    
});


