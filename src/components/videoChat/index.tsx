import React, { useEffect, useState } from 'react'
import Draggable from 'react-draggable';
import Video from '../Video';
import Style from "./style"

import { motion } from "framer-motion"


export default function index() {


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
      >  <Video controls={false} style={{width: 250, borderRadius: 20}}/></motion.div>

    

   </Style>
  )
}


