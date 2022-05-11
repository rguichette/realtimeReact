import React from "react";
import Style from "./styles";
import { useSelector, useDispatch } from "react-redux";

import { BsFillMicFill, BsFillMicMuteFill } from "react-icons/bs";
import { RootState } from "../../../store";
import { muteAudio } from "../../../videoSlice";

export default function Microphone({ ...props }) {
  let dispatch = useDispatch();
  let { muted } = useSelector((state: RootState) => state.video);
  return (
    <Style {...props}>
      <div onClick={() => dispatch(muteAudio())}>
        {!muted ? <BsFillMicFill /> : <BsFillMicMuteFill />}
      </div>
    </Style>
  );
}
