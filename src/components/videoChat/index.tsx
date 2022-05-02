import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import Draggable from 'react-draggable';
import Video from '../Video';
import Style from "./style"

import { motion } from "framer-motion"
import { getMedia } from '../../helpers/callHelper';

import { useSelector } from 'react-redux';
import { RootState } from '../../store';


export default function index() {
  let localRef = useRef() as MutableRefObject<HTMLVideoElement>;
  let {muted, hide} = useSelector((state:RootState)=>state.video)
  
  
  
  useEffect(()=>{

    
    // if audio/video false, then we are seeing and hearing 
    getMedia({audio: !muted, video:!hide}).then((stream)=>{

      localRef.current.srcObject = stream
    })

  })
  
  // getMedia().then(s =>{
  //   // console.log("S", s);
    
    
  //   // localRef.current.srcObject = s;

  // })



  return (
 <Style>
    
      <Video/>
      <motion.div className="motion_video"  style={{position:"absolute", top:0, border: "1px solid yellow",borderRadius: 20}}
      drag dragConstraints={{
        top: 0,
        left: 50,
        right: window.innerWidth - 300,
        bottom:window.innerHeight -141,
      }}
      >  <Video  ref={localRef}  controls={false} 
       style={{width: 250, borderRadius: 20} }/></motion.div>

{/* {console.log("localRef",localRef)} */}


   </Style>
  )
}


