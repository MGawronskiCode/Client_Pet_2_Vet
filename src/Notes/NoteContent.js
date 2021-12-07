import {MDBIcon} from "mdb-react-ui-kit";
import React, {Component} from "react";

export default class NoteContent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            disabled: false,
        }

        this.deleteNote = this.deleteNote.bind(this);
    }

    deleteNote() {
        alert("Modal with confirmation will be here.");
    }

    render() {
        return (
            <div id="content">

                {this.props.content}

                <MDBIcon id="delete" fas icon="trash-alt" onClick={this.deleteNote}  />

            </div>
        )
    }
}