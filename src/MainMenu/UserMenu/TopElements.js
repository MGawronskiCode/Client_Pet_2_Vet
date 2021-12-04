import React from "react";
import MenuElement from "../MenuElement";

export default function TopElements () {

    const topElements = [
        {
            icon : "sticky-note",
            title : "Note"
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
            icon : "calendar-alt",
            title : "Calendar"
        }
    ]

    return (
        <div>
            {topElements.map((element) =>
                <MenuElement element={element} />
            )}
        </div>
    )
}