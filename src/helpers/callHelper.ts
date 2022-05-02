

interface IConstraints {
 video?: boolean, 
 audio?: boolean
}

/**
 * retrieves media from user 
 */
export let getVideo = async(constraints:IConstraints ={video:true, audio:true})=>{

 console.log("getting video", constraints);
    return 0;
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