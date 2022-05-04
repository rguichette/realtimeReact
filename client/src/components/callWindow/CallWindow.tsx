import React, { useRef, useState } from 'react'
import Style from './style'
import { makeCall } from '../../helpers/callHelper'

export default function CallWindow({calling, setStartCall}:{calling:any, setStartCall?:any}) {

  let [callId, setCallId] = useState("")
  let r = useRef() as React.RefObject<HTMLDivElement> 
  let [call, setCall ] = useState(false)

    
  return (

    <Style className={call?'closed' : 'parent' } >
      
      <div className='main_wrapper' >
       <button id="exit" onClick={()=>calling(false)}
        >X</button>

    <div className='center_wrapper'>
        <input type="text" placeholder="PARTNER ID" onChange={(e)=>setCallId(e.target.value)}/>
        <div className='btn_wrapper'>
        <button id='cancel' onClick={()=>{
          calling(false)
          }} >cancel</button>
        <button id='call' onClick={()=>{
          makeCall(callId)
          if(callId)
            calling(false)
          
          }} >Call</button>
        </div>
      </div>  
        </div> 
        </Style>
  )
}
