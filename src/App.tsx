import "./app.css"
import Video from './components/Video'
import Controls from './components/controls'


import VideoChat from './components/videoChat'


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

<VideoChat/>
</div>
  )
}

export default App
