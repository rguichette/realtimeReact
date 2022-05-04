import "./app.css"
import Video from './components/Video'
import Controls from './components/controls'

import {getMedia} from './helpers/callHelper'

import VideoChat from './components/videoChat'

import {socket} from './utils/peer_connection'

function App() {

  return (
    <div className="App" style={{ height:"100%", width:"100%"}} >


<VideoChat/>
</div>
  )
}

export default App
