import React, {Component} from "react";
import {MDBIcon} from "mdb-react-ui-kit";
import '../../Menu.css'

export default class Veterinarians extends Component {

    constructor(props) {
        super(props);

        this.state = {
            veterinarians : [],
        };

        this.getVeterinarians = this.getVeterinarians.bind(this);
    }

    // TODO made endpoint at back-end side
    // async componentDidMount() {
    //     fetch("http://localhost:8080/veterinarians")
    //         .then(response => response.json()
    //             .then(data => this.setState({veterinarians: data}))
    //         );
    // }

    getVeterinarians() {
        alert("List of veterinarians will be there.");
    }

    render() {
        return (
            <div id="menuElement">
                <p>
                    <a onClick={this.getVeterinarians}>
                        <MDBIcon icon="user-md"/>&ensp; Veterinarians
                    </a>
                </p>
            </div>
        )
    }
}