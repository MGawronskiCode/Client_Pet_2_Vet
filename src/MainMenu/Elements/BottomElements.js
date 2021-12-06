import React from "react";
import Feedback from "./Feedback";
import Settings from "./Settings";

export default function BottomElements() {

    return (
        // <div id="menu" className="bottom-0 position-absolute bs-tooltip-bottom">
        //     <Feedback />
        //     <Settings />
        // </div>
        <div>
            <Feedback />
            <Settings />
        </div>
    )
}