import React from 'react'
import VidStyles from './style'


import {useSelector, useDispatch} from 'react-redux'

/**
 * @param controls - default is true to display controls 
 * 
 * 
 */



export default function Video({controls=true}:{controls?:boolean} ) {
    {console.log(controls)
    }
  return (

    <VidStyles>
        <div className="vid_controls"> 
            <button onClick={()=>{
                console.log("testing Mute");
                
            }}>test Mute</button>
        </div>
      <video autoPlay muted >
          {/* <source  type="video/mp4" src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" /> */}
      </video>
    </VidStyles>
  )
}
