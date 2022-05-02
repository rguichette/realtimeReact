

interface IConstraints {
 video?: boolean, 
 audio?: boolean
}

/**
 * retrieves media from user 
 */
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

export let makeCall = async() =>{
    
}

export let pickUpCall = async() =>{

}
export let hangupCall = async() =>{

}

export let mute = async() =>{

} 

export let hide = async() =>{

}
console.log("HELLO MEDIA")