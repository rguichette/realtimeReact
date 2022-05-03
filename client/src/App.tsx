import "./app.css"
import Video from './components/Video'
import Controls from './components/controls'

import {getMedia} from './helpers/callHelper'

import VideoChat from './components/videoChat'

import {socket} from './socket'

function App() {


// console.log(stream);

socket.on("connect", () => {
  console.log(socket.id); // x8WIv7-mJelg7on_ALbx
});

  return (
    <div className="App" style={{ height:"100%", width:"100%"}} >


<VideoChat/>
</div>
  )
}

export default App
