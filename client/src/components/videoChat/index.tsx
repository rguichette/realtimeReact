import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import Video from "../Video";
import Style from "./style";

import { motion } from "framer-motion";
import { getMedia } from "../../helpers/callHelper";

import { useSelector } from "react-redux";
import { RootState } from "../../store";

import { peerConnection } from "../../helpers/callHelper";

export default function index() {
  let localRef = useRef() as MutableRefObject<HTMLVideoElement>;
  let remoteVideoRef = useRef() as MutableRefObject<HTMLVideoElement>;
  let { muted, hide } = useSelector((state: RootState) => state.video);

  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);

  useEffect(() => {
    // peerConnection.getSenders()[0].replaceTrack(track)
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        setMediaStream(stream);
      });

    //needed to trigger re-render so we get get the new stream;
  }, [hide, muted]);

  useEffect(() => {
    if (mediaStream) mediaStream.getVideoTracks()[0].enabled = !hide;
    //handle hiding
    mediaStream?.getVideoTracks().forEach((track) => {
      if (peerConnection.getSenders().length) {
        peerConnection.getSenders()[0].replaceTrack(track);
      } else {
        peerConnection.addTrack(track, mediaStream);
      }
    });

    localRef.current.srcObject = mediaStream;
    peerConnection.ontrack = (e) => {
      let [remoteStream] = e.streams;
      remoteVideoRef.current.srcObject = remoteStream;
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

      {/* {console.log("localRef",localRef)} */}
    </Style>
  );
}
