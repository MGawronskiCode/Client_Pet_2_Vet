import React, {Component} from "react";
import {MDBIcon} from "mdb-react-ui-kit";
import '../../Menu.css'

export default class Calendar extends Component {

    constructor(props) {
        super(props);

        this.getCalendar = this.getCalendar.bind(this);

    }

    getCalendar() {
        alert("Calendar will be here.");
    }

    render() {
        return (
            <div id="menuElement">
                <p>
                    <a onClick={this.getCalendar}>
                        <MDBIcon icon="calendar-alt"/>&ensp; Calendar
                    </a>
                </p>
            </div>
        )
    }
}