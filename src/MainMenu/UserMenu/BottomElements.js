import React from "react";
import MenuElement from "../MenuElement";

export default function BottomElements() {

    const bottomElements = [
        {
            icon : "paper-plane",
            title : "Send feedback"
        },
        {
            icon : "cog",
            title : "Settings"
        }
    ]

    return (
        <div className="bottom-0 position-absolute bs-tooltip-bottom">
            {bottomElements.map((element) =>
                <MenuElement element={element} />
            )}
        </div>
    )
}