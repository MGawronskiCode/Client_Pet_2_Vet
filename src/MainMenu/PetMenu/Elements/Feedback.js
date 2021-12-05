import React, {Component} from "react";
import {MDBIcon} from "mdb-react-ui-kit";
import '../../Menu.css'

export default class Feedback extends Component {

    constructor(props) {
        super(props);

        this.sendFeedback = this.sendFeedback.bind(this);
    }

    sendFeedback() {
        alert("Feedback will be here.");
    }

    render() {
        return (
            <div>
                <p>
                    <a onClick={this.sendFeedback}>
                        <MDBIcon icon="paper-plane"/>&ensp; Send feedback
                    </a>
                </p>
            </div>
        )
    }
}