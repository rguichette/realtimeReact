import "./app.css"
import Video from './components/Video'
import Controls from './components/controls'

import {getMedia} from './helpers/callHelper'

import VideoChat from './components/videoChat'

function App() {


// console.log(stream);



  return (
    <div className="App" style={{ height:"100%", width:"100%"}} >


<VideoChat/>
</div>
  )
}

export default App
