import React from 'react'

import {useSelector, useDispatch} from 'react-redux'
import { MdOutlineVideocamOff, MdOutlineVideocam } from 'react-icons/md';
import {BsFillMicFill, BsFillMicMuteFill} from 'react-icons/bs';
import {IoIosCall} from 'react-icons/io';

import {AppDispatch, RootState} from '../../store'
import { initVideoState, muteAudio, hide as hideVideo } from '../../videoSlice';
import Styles from "./style"

//TODO: find css style types
export default function index(style?:any) {
  const {muted, hide, in_call} = useSelector<RootState>(state => state.video) as initVideoState
  const dispatch = useDispatch()
  console.log(muted,hide, in_call);


  return (
    <Styles id='controls'>
    <div className="controls_container" style={style}>
      <div className='icon_container' onClick={()=>dispatch(hideVideo())} >

     { !hide ? <MdOutlineVideocam className='icon'/> : <MdOutlineVideocamOff className='icon'/>}
      </div>
      <div className=" icon_container mic_container" onClick={()=>dispatch(muteAudio())}>
     {!muted ? <BsFillMicFill className='icon'/> : <BsFillMicMuteFill className='icon'/>}
      </div>
      <div className='icon_container phone_container' >
        {/* in call - hang up option: red , start_call - start call option: green  */}
      <IoIosCall className={in_call? "icon  call_icon in_call": "icon call_icon start_call"}  />
      </div>


    </div></Styles>
  )
}
