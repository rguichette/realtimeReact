import { io } from "socket.io-client";
import {socket} from "../utils/peer_connection"

interface IConstraints {
 video?: boolean, 
 audio?: boolean
}

interface IcallMeta {
  caller:string, callee:string
}
/**
 * retrieves media from user 
 */
 const configuration = {'iceServers': [{'urls': 'stun:stun.l.google.com:19302'}]}
 export const peerConnection = new RTCPeerConnection(configuration);

 

export let getMedia= async (constraints:IConstraints ={video:true, audio:true})=>{
    let stream = null;


  try {
    stream = await navigator.mediaDevices.getUserMedia(constraints);
    /* use the stream */
  } catch(err) {
    /* handle the error */
  }
 
return stream;

}
let callMeta:IcallMeta;

export let makeCall = async(callId:string) =>{
  callMeta ={
    caller: socket.id,
    callee: callId
  }

  const offer = await peerConnection.createOffer();
  await peerConnection.setLocalDescription(offer);

  

socket.emit("test")
socket.emit("offer",{offer:offer,callMeta:callMeta})

  console.log("localId: ", socket.id);
  
    console.log("making call to: ", callId);
    
}

export let pickUpCall = async() =>{

}
export let hangupCall = async() =>{

}

export let mute = async() =>{

} 

export let hide = async() =>{

}
//------------------------------------ socket Listeners ------------------------


//listen to offer from server and set Discriptions
socket.on("offer", async({offer, caller})=>{
  if(offer){
    console.log("OFFER", offer);
    peerConnection.setRemoteDescription(new RTCSessionDescription(offer));
    const answer = await peerConnection.createAnswer();
    await peerConnection.setLocalDescription(answer);
    socket.emit("answer", {answer: answer, caller})
  }
})
//listens for user response from other side and set Discriptions
socket.on('answer', async({answer}) =>{
  console.log('ANSWER ATTEMPT', answer);
  
if(answer){
  const remoteDesc = new RTCSessionDescription(answer);
  await peerConnection.setRemoteDescription(remoteDesc);
  // console.log("ANSWER");
  
}

// console.log(peerConnection);

})


// peerConnection.addEventListener("icecandidate", e =>{
//   console.log("ICE", e);
  
// })


peerConnection.addEventListener('icecandidate', event => {
  // console.log(event.candidate);
  let candidate = event.candidate;
  
  if (event.candidate) {
    if(callMeta)
    // console.log("sending the message to ", event.candidate);
    socket.emit('candidate', {callMeta,candidate });
    
    //TODO: emit the ID of the callee with this --
      // socket.emit('new-ice-candidate', event.candidate);
  }
});

socket.on('candidate', async(data)=>{
  
  if (data.candidate) {
    try {
    // console.log("can ",data);
      await peerConnection.addIceCandidate(data.candidate);
      
  } catch (e) {
      console.error('Error adding received ice candidate', e);
  }
}

})