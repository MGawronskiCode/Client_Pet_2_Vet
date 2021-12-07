import React from "react";
import Feedback from "./Feedback";
import Settings from "./Settings";

export default function BottomElements() {

    return (
        <div className="bottom-0 position-absolute bs-tooltip-bottom">
            <Feedback />
            <Settings />
        </div>
    )
}