import React, {Component} from "react";
import MenuTitle from "../MenuTitle";
import UserNotes from "../Elements/UserNotes";
import Veterinarians from "../Elements/Veterinarians";
import FindAVeterinarian from "../Elements/FindAVeterinarian";
import Calendar from "../Elements/Calendar";
import Feedback from "../Elements/Feedback";
import Settings from "../Elements/Settings";

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