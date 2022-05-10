import { io } from "socket.io-client";
import {socket} from "../utils/peer_connection"

// import { setInCall } from "../videoSlice";

import store from '../store'
import { pickup } from "../videoSlice";

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

 

export let getMedia=  (constraints:IConstraints ={video:true, audio: true})=>{
    let stream = null;


  try {
    return navigator.mediaDevices.getUserMedia(constraints);
    /* use the stream */
  } catch(err) {
    /* handle the error */
  }
 

}



let callMeta:IcallMeta;
let answer:any;

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


// store.dispatch(pickup())



export let hangupCall = async() =>{

}

export let toggleMute = async(mediaStream: MediaStream , muted:boolean) =>{

  if (mediaStream.getTracks()[1])
  mediaStream.getAudioTracks()[0].enabled = !muted;

mediaStream.getAudioTracks().forEach((track) => {
  if (peerConnection.getSenders().length) {
    peerConnection.getSenders()[0].replaceTrack(track);
  } else {
    peerConnection.addTrack(track, mediaStream);
  }
});
} 

export let toggleHide = async(mediaStream: MediaStream , hide:boolean) =>{

    //by default hide and mute are false. "is the cam/mic on"
    mediaStream.getVideoTracks()[0].enabled = !hide;

    mediaStream?.getVideoTracks().forEach((track) => {
      if (peerConnection.getSenders().length) {
        peerConnection.getSenders()[0].replaceTrack(track);
      } else {
        peerConnection.addTrack(track, mediaStream);
      }
    });

}

//------------------------------------ socket Listeners ------------------------


// listen to offer from server and set Discriptions
socket.on("offer", async({offer, caller})=>{
  if(offer){
    console.log("OFFER", offer);
    peerConnection.setRemoteDescription(new RTCSessionDescription(offer));
  }
})


// socket.on("offer", async({offer, caller})=>{
//   if(offer){
//     const answer = await peerConnection.createAnswer();
//     await peerConnection.setLocalDescription(answer);
//     socket.emit("answer", {answer: answer, caller})
//   }
// })


socket.on("offer", async({offer, caller, callee})=>{
  console.log('AnswerinG from pickup');
  
  //set meta when call received:


  if(offer){
    callMeta = {callee, caller}
    const _answer = await peerConnection.createAnswer();
    await peerConnection.setLocalDescription(_answer);
    answer = _answer
    // socket.emit("answer", {answer: answer, caller})

  }
})
export let pickUpCall =  () =>{
  console.log("HEY!", callMeta?.caller);
  socket.emit("answer", {answer: answer, caller:callMeta.caller})  
  
  store.dispatch(pickup())
}

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

// peerConnection.addEventListener('connectionstatechange', event => {
//   if (peerConnection.connectionState === 'connected') {
//   console.log('CONNECTED');
//     // store.dispatch()
  
//   }
// });