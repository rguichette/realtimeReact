import React, { useEffect } from "react";
import IncomingStyle from "./Style";
import { FaPhoneAlt } from "react-icons/fa";
import { pickUpCall } from "../../helpers/callHelper";

export default function IncomingWindow() {
  return (
    <IncomingStyle>
      <div className="items_container">
        <h2>Incoming Call</h2>
        <FaPhoneAlt id="phone_icon" />
        <div className="btn_container">
          <button onClick={() => {}}>decline</button>
          <button
            onClick={() => {
              pickUpCall();
            }}
          >
            Answer
          </button>
        </div>
      </div>
      ;
    </IncomingStyle>
  );
}
