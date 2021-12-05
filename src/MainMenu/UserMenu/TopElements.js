import React from "react";
import MenuElement_OLD from "../MenuElement_OLD";

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
                <MenuElement_OLD element={element} />
            )}
        </div>
    )
}