import React, {Component} from "react";
import MenuTitle from "../MenuTitle";
import Pets from "../Elements/Pets";
import Veterinarians from "../Elements/Veterinarians";
import FindAVeterinarian from "../Elements/FindAVeterinarian";
import Diet from "../Elements/Diet";
import Calendar from "../Elements/Calendar";
import BottomElements from "../Elements/BottomElements";

export default class PetMenu extends Component {

    // TODO petId from Parent. Here only for test
    petId = 1;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <MenuTitle title="Menu"/>
                <Pets/>
                <Veterinarians/>
                <FindAVeterinarian/>
                <Diet petId={this.petId}/>
                <Calendar/>
                <BottomElements/>
            </div>
        )
    }
}