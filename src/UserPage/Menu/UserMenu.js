import React, {Component} from "react";
import MenuTitle from "../../PetPage/Menu/Elements/MenuTitle";
import UserNotes from "../../PetPage/Menu/Elements/UserNotes";
import Veterinarians from "../../PetPage/Menu/Elements/Veterinarians";
import FindAVeterinarian from "../../PetPage/Menu/Elements/FindAVeterinarian";
import Calendar from "../../PetPage/Menu/Elements/Calendar";
import Feedback from "../../PetPage/Menu/Elements/Feedback";
import Settings from "../../PetPage/Menu/Elements/Settings";

export default class UserMenu extends Component {

    // TODO userId from Parent. Here only for test
    userId = 2;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <MenuTitle title="Menu"/>
                <UserNotes userId={this.userId}/>
                <Veterinarians/>
                <FindAVeterinarian/>
                <Calendar/>
                <div id="bottomElements">
                    <Feedback />
                    <Settings />
                </div>
            </div>
        )
    }
}
