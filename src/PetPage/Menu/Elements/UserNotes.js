import React, {Component} from "react";
import {MDBIcon} from "mdb-react-ui-kit";
import '../../../Styles/Menu.css'

export default class UserNotes extends Component {

    constructor(props) {
        super(props);

        this.state = {
            notes : [],
        };

        this.getNotes = this.getNotes.bind(this);
    }

    async componentDidMount() {
        fetch("http://localhost:8080/users/" + this.props.userId + "/notes")
            .then(response => response.json()
                .then(data => this.setState({notes: data}))
            );
    }

    getNotes() {
        alert(this.state.notes);
    }

    render() {
        return (
            <div id="menuElement">
                <p>
                    <a onClick={this.getNotes}>
                        <MDBIcon icon="sticky-note"/>&ensp; Notes
                    </a>
                </p>
            </div>
        )
    }
}