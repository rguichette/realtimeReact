import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { MdOutlineVideocamOff, MdOutlineVideocam } from "react-icons/md";
import { BsFillMicFill, BsFillMicMuteFill } from "react-icons/bs";
import { IoIosCall } from "react-icons/io";
import { IoCopyOutline } from "react-icons/io5";

import { AppDispatch, RootState } from "../../store";
import { initVideoState, muteAudio, hide as hideVideo } from "../../videoSlice";
// import Styles from "./style";

import { socket } from "../../utils/peer_connection";

import CallWindow from "../callWindow";
import Style from "./style";
import Microphone from "../Icons/MicrophoneIcon";
import Camera from "../Icons/CameraIcon";
import Phone from "../Icons/PhoneIcon";
// import PickHangUP from "../PhoneIcon";
//
//TODO: find css style types
// export default function index({
//   style,
//   setCalling,
// }: {
//   style?: any;
//   setCalling: any;
// }) {
//   const { muted, hide, in_call } = useSelector<RootState>(
//     (state) => state.video
//   ) as initVideoState;
//   const dispatch = useDispatch();
//   console.log(muted, hide, in_call);

//   let [callId, setCallId] = useState("");
//   let [copyId, setCopyId] = useState(false);

//   let makeCall = () => {
//     console.log("MAKING CALL ");
//   };

//   return (
//     <Styles id="controls">
//       <div className="controls_container" style={style}>
//         <div className="copy">
//           {copyId ? (
//             <span id="toolTip_copied">COPIED</span>
//           ) : (
//             <span id="toolTip_id">COPY ID</span>
//           )}

//           {/* <span id="toolTip_id">COPY ID</span> */}
//           {/*   */}

//           <IoCopyOutline
//             id="copy_icon"
//             onClick={() => {
//               setCopyId(true);
//               navigator.clipboard.writeText(socket.id);
//               setTimeout(() => {
//                 setCopyId(false);
//               }, 2000);
//             }}
//           />
//         </div>

//         <div className="icon_container" onClick={() => dispatch(hideVideo())}>
//           {!hide ? (
//             <MdOutlineVideocam className="icon" />
//           ) : (
//             <MdOutlineVideocamOff className="icon" />
//           )}
//         </div>
//         <div
//           className=" icon_container mic_container"
//           onClick={() => dispatch(muteAudio())}
//         >
//           {!muted ? (
//             <BsFillMicFill className="icon" />
//           ) : (
//             <BsFillMicMuteFill className="icon" />
//           )}
//         </div>

//         <div className="icon_container phone_container">
//           <IoIosCall
//             className={
//               in_call ? "icon  call_icon in_call" : "icon call_icon start_call"
//             }
//             onClick={() => {
//               //TODO: MAKE call
//               setCalling(true);
//             }}
//           />
//         </div>
//       </div>
//     </Styles>
//   );
// }

export default function Controls() {
  return (
    <Style>
      <div className="container">
        <section>
          <IoCopyOutline
            id="copy_icon"
            onClick={() => {
              navigator.clipboard.writeText(socket.id);
            }}
          />
        </section>
        <section id="controls">
          <div className="icons">
            <Microphone />
            <Camera />
            <Phone />
          </div>
        </section>
        <div className="screens">
          <section>full screen</section>
          <section>screenShare</section>
        </div>
      </div>
    </Style>
  );
}
