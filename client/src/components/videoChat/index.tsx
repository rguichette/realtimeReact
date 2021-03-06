import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import Video from "../Video";
import Style from "./style";

import { motion } from "framer-motion";
import { getMedia, toggleHide, toggleMute } from "../../helpers/callHelper";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";

import { peerConnection } from "../../helpers/callHelper";
import { initVideoState } from "../../videoSlice";
import CallWindow from "../callWindow";

export default function index() {
  let localRef = useRef() as MutableRefObject<HTMLVideoElement>;
  let remoteVideoRef = useRef() as MutableRefObject<HTMLVideoElement>;
  let { muted, hide } = useSelector((state: RootState) => state.video);

  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);

  let dispatch = useDispatch();

  let { in_call, call_window } = useSelector<RootState>(
    (state) => state.video
  ) as initVideoState;

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        setMediaStream(stream);
      });

    //needed to trigger re-render so we can get the new stream;
  }, [hide, muted]);

  useEffect(() => {
    if (mediaStream) {
      //handle hiding
      toggleHide(mediaStream, hide);
      //handling mute
      toggleMute(mediaStream, muted);
    }

    localRef.current.srcObject = mediaStream;
    peerConnection.ontrack = (e) => {
      let [remoteStream] = e.streams;
      if (remoteVideoRef) remoteVideoRef.current.srcObject = remoteStream;
    };
  });

  return (
    <Style>
      <Video ref={remoteVideoRef} main={true} />
      <motion.div
        className="motion_video"
        style={{
          position: "absolute",
          top: 0,
          border: "1px solid yellow",
          borderRadius: 20,
        }}
        drag
        dragConstraints={{
          top: 0,
          left: 50,
          right: window.innerWidth - 300,
          bottom: window.innerHeight - 141,
        }}
      >
        {" "}
        <Video
          ref={localRef}
          controls={false}
          style={{ width: 250, borderRadius: 20 }}
        />
      </motion.div>

      {call_window && (
        <div className="call_window">
          <CallWindow />
        </div>
      )}
    </Style>
  );
}
