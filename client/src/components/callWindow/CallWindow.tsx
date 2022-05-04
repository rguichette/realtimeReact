import React, { useState } from 'react'
import Style from './style'
import { makeCall } from '../../helpers/callHelper'

export default function CallWindow({calling}:{calling:any}) {

  let [callId, setCallId] = useState("")
    
  return (

    <Style>
      
      <div className='main_wrapper'>
       <button id="exit" onClick={()=>calling(false)}
        >X</button>

    <div className='center_wrapper'>
        <input type="text" placeholder="PARTNER ID" onChange={(e)=>setCallId(e.target.value)}/>
        <div className='btn_wrapper'>
        <button id='cancel' onClick={()=>calling(false)} >cancel</button>
        <button id='call' onClick={()=>{makeCall(callId)}} >Call</button>
        </div>
      </div>  
        </div> 
        </Style>
  )
}
