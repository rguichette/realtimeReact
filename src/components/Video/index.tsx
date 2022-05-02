import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {AppDispatch, RootState} from '../../store'

import VidStyles from './style'

import {muteAudio, hide, pickup, hangup, initVideoState} from '../../videoSlice'
import Controls from '../controls'





/**
 * @param controls - default is true to display controls 
 * 
 * 
 */

interface Ivideo  {
  controls?:boolean,
  style?:{background?:string, 
  height?:number, width:number,
  borderRadius?:number |string

  border?:string
}
}

export default function Video({controls=true, style={width:720}}:Ivideo ) {
    const {muted, hide, in_call } = useSelector<RootState>(state =>state.video) as initVideoState
    const dispatch = useDispatch<AppDispatch>()

    {console.log("muted", muted)
    }
  return (
    
    <VidStyles style={style} >
        <div className="vid_controls"> 

        </div>
        <div className='video_container'>

      <video autoPlay muted controls={false} id="localVideo" onLoadedMetadata={(e)=>onloadMetaData(e)}>
          {/* <source  type="video/mp4" src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" /> */}
      </video>
      {controls && <Controls style={{background:"red"}}/>}
        </div>
    </VidStyles>
  )
}


function onloadMetaData (e:React.SyntheticEvent<HTMLVideoElement, Event>){
    console.log("meta loaded");
    
    let player = e.target as HTMLVideoElement;
    // player.width = player.videoWidth
    // player.height = player.videoHeight;
}