import React, { useRef, useState } from "react";
import Style from "./style";
import { makeCall } from "../../helpers/callHelper";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { open_call_window } from "../../videoSlice";

export default function CallWindow({
  calling,
  setStartCall,
}: {
  calling?: any;
  setStartCall?: any;
}) {
  let { call_window } = useSelector((state: RootState) => state.video);
  let dispatch = useDispatch();
  let [callId, setCallId] = useState("");
  let [call, setCall] = useState(false);

  return (
    <Style className={call_window ? "closed" : "parent"}>
      <div className="main_wrapper">
        <button id="exit" onClick={() => dispatch(open_call_window(false))}>
          X
        </button>

        <div className="center_wrapper">
          <input
            type="text"
            placeholder="PARTNER ID"
            onChange={(e) => setCallId(e.target.value)}
          />
          <div className="btn_wrapper">
            <button
              id="cancel"
              onClick={() => {
                dispatch(open_call_window(false));
              }}
            >
              cancel
            </button>
            <button
              id="call"
              onClick={() => {
                makeCall(callId);
                if (callId) dispatch(open_call_window(false));
              }}
            >
              Call
            </button>
          </div>
        </div>
      </div>
    </Style>
  );
}
