import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { IoIosCall } from "react-icons/io";
import { ImPhoneHangUp } from "react-icons/Im";
import { AppDispatch, RootState } from "../../../store";
import {
  initVideoState,
  setInCall,
  open_call_window,
} from "../../../videoSlice";
import Style from "./styles";
import CallWindow from "../../callWindow";

export default function Phone({ ...props }) {
  let dispatch = useDispatch();

  let { in_call } = useSelector<RootState>(
    (state) => state.video
  ) as initVideoState;

  return (
    <Style>
      <div {...props}>
        {!in_call ? (
          <IoIosCall
            onClick={() => {
              dispatch(open_call_window(true));
            }}
          />
        ) : (
          <ImPhoneHangUp onClick={() => {}} />
        )}
      </div>
    </Style>
  );
}
