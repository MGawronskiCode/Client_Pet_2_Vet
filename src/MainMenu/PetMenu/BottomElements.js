import React from "react";
import Feedback from "./Elements/Feedback";
import Settings from "./Elements/Settings";

export default function BottomElements() {

    return (
        <div className="bottom-0 position-absolute bs-tooltip-bottom">
            <Feedback />
            <Settings />
        </div>
    )
}