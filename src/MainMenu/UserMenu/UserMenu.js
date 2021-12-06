import React, {Component} from "react";
import MenuTitle from "../MenuTitle";
import UserNotes from "../Elements/UserNotes";
import Veterinarians from "../Elements/Veterinarians";
import FindAVeterinarian from "../Elements/FindAVeterinarian";
import Calendar from "../Elements/Calendar";
import BottomElements from "../Elements/BottomElements";

export default class UserMenu extends Component {

    // TODO userId from Parent. Here only for test
    userId = 2;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <MenuTitle title="Menu" />
                <UserNotes userId={this.userId} />
                <Veterinarians />
                <FindAVeterinarian />
                <Calendar />
                <BottomElements />
            </div>
        )
    }
}