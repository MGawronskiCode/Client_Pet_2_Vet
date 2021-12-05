import MenuElement from "../MenuElement";
import React from "react";

export default function Elements () {

    const elements = [
        {
            icon : "heart",
            title : "Your Pets"
        },
        {
            icon : "user-md",
            title : "Veterinarians"
        },
        {
            icon : "map-marked-alt",
            title : "Find a Veterinarian"
        },
        {
            icon : "drumstick-bite",
            title : "Diet module"
        },
        {
            icon : "calendar-alt",
            title : "Calendar"
        }
    ]

    return (
        <div>
            {elements.map((element) =>
                <MenuElement element={element} />
            )}
        </div>
    )
}