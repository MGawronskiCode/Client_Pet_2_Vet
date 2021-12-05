import React, {Component} from "react";
import {MDBIcon} from "mdb-react-ui-kit";
import '../../Menu.css'

export default class FindAVeterinarian extends Component {

    constructor(props) {
        super(props);

        this.findVet = this.findVet.bind(this);
    }

    findVet() {
        alert("Find a veterinarian method will be here.");
    }

    render() {
        return (
            <div>
                <p>
                    <a onClick={this.findVet}>
                        <MDBIcon icon="map-marked-alt"/>&ensp; Find a Veterinarian
                    </a>
                </p>
            </div>
        )
    }
}