import React from "react";
import Pets from "../Elements/Pets";
import Veterinarians from "../Elements/Veterinarians";
import FindAVeterinarian from "../Elements/FindAVeterinarian";
import Diet from "../Elements/Diet";
import Calendar from "../Elements/Calendar";
import BottomElements from "../Elements/BottomElements";

export default function MenuElements() {

    // TODO petId from Parent. Here only for test
    const petId = 1;

    return (
        <div id='menu-elements'>
            <Pets/>
            <Veterinarians />
            <FindAVeterinarian />
            <Diet petId={petId}/>
            <Calendar />
            <BottomElements />
        </div>
    )
}
