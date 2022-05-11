import React from "react";
import Style from "./styles";
import { MdOutlineVideocamOff, MdOutlineVideocam } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { hide as hideVideo } from "../../../videoSlice";
import { RootState } from "../../../store";

export default function Camera() {
  let dispatch = useDispatch();
  let { hide } = useSelector((state: RootState) => state.video);
  return (
    <Style>
      <div onClick={() => dispatch(hideVideo())}>
        {!hide ? <MdOutlineVideocam /> : <MdOutlineVideocamOff />}
      </div>
    </Style>
  );
}
