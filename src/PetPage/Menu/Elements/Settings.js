import React, {Component} from "react";
import {MDBIcon} from "mdb-react-ui-kit";
import '../../../Styles/Menu.css'

export default class Settings extends Component {

    constructor(props) {
        super(props);

        this.displaySettings = this.displaySettings.bind(this);
    }

    displaySettings() {
        alert("Settings will be here.");
    }

    render() {
        return (
            <div id="menuElement">
                <p>
                    <a onClick={this.displaySettings}>
                        <MDBIcon icon="cog"/>&ensp; Settings
                    </a>
                </p>
            </div>
        )
    }
}