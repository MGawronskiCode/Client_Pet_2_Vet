import React from "react";
import UserNotes from "../Elements/UserNotes";
import Veterinarians from "../Elements/Veterinarians";
import FindAVeterinarian from "../Elements/FindAVeterinarian";
import Calendar from "../Elements/Calendar";
import BottomElements from "../Elements/BottomElements";

export default function MenuElements() {

    // TODO userId from Parent. Here only for test
    const userId = 2;

    return (
        <div>
            <UserNotes userId={userId} />
            <Veterinarians />
            <FindAVeterinarian />
            <Calendar />
            <BottomElements />
        </div>
    )
}