import "./app.css"
import Video from './components/Video'
import Controls from './components/controls'

import Draggable from 'react-draggable';

    //   <div className='remote_video_wrapper'>

    //  <Video/>
    //   </div>
    //  <div >
    //    <div className="local_video_wrapper">

    //  <Video controls={false} style={{background:"orange", width:250, borderRadius:10}}/>
    //    </div>

    //  </div>
function App() {
 
  return (
    <div className="App" style={{ height:"100%", width:"100%"}} >
      {/* <Video/> */}

      {/* <div style={{width:"100%", background: "yellow", height:"100%"}}>test</div> */}
  
<Draggable bounds="parent" >
  <div className="TEST" style={{background: "green", display:"inline-block", position: "absolute", top:"25px"}} >

  <Video style={{width: 250}}/>
  </div>

</Draggable>
</div>
  )
}

export default App
