import "./app.css"
import Video from './components/Video'
import Controls from './components/controls'

import {getVideo} from './helpers/callHelper'

import VideoChat from './components/videoChat'

function App() {
 getVideo({audio: false})
  return (
    <div className="App" style={{ height:"100%", width:"100%"}} >


<VideoChat/>
</div>
  )
}

export default App
