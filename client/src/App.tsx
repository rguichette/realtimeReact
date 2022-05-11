import "./app.css";
import Video from "./components/Video";
import Controls from "./components/controls";

import { getMedia } from "./helpers/callHelper";

import VideoChat from "./components/videoChat";

import { socket } from "./utils/peer_connection";
import IncomingCallWindow from "./components/IncomingCallWindow";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incoming } from "./videoSlice";
import { RootState } from "./store";
import Microphone from "./components/Icons/MicrophoneIcon";
import Camera from "./components/Icons/CameraIcon";
import Phone from "./components/Icons/PhoneIcon";
import CallWindow from "./components/callWindow";

function App() {
  let dispatch = useDispatch();
  //incoming --> one is a STATE while the other is an ACTION -- this one is STATE being renamed
  let { is_incoming, in_call } = useSelector((state: RootState) => state.video);

  useEffect(() => {
    //listens to incoming offer to set incoming call state
    socket.on("offer", () => {
      dispatch(incoming());
    });
  });
  return (
    <div style={{ width: "100%", background: "aqua", height: "100%" }}>
      {/* if call is being recieved, then display window */}
      {is_incoming && <IncomingCallWindow />}

      <VideoChat />
    </div>
  );
}

export default App;
