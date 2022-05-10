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

function App() {
  let dispatch = useDispatch();
  let { incoming: incomingCall } = useSelector(
    (state: RootState) => state.video
  );
  useEffect(() => {
    //listens to incoming offer to set incoming call state
    socket.on("offer", () => {
      dispatch(incoming());
      console.log("INCOMING OFFER");
    });
  });
  return (
    <div className="App" style={{ height: "100%", width: "100%" }}>
      <VideoChat />
      {incomingCall && <IncomingCallWindow />}
    </div>
  );
}

export default App;
