import React from 'react'
import Style from './style'

export default function CallWindow({calling}:{calling:any}) {
    
  return (

    <Style>
      
      <div className='main_wrapper'>
       <button id="exit" onClick={()=>calling(false)}
        >X</button>

    <div className='center_wrapper'>
        <input type="text" placeholder="PARTNER ID"/>
        <div className='btn_wrapper'>
        <button id='cancel' onClick={()=>calling(false)} >cancel</button>
        <button id='call' >Call</button>
        </div>
      </div>  
        </div> 
        </Style>
  )
}
