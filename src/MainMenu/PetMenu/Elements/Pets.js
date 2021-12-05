import React, {Component} from "react";
import {MDBIcon} from "mdb-react-ui-kit";
import '../../Menu.css'

export default class Pets extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pets : [],
        };

        this.getPets = this.getPets.bind(this);
    }

    async componentDidMount() {
        fetch("http://localhost:8080/pets")
            .then(response => response.json()
                .then(data => this.setState({pets: data}))
            );
    }

    getPets() {
        alert(this.state.pets);
    }

    render() {
        return (
            <div id="menuElement">
                <p>
                    <a onClick={this.getPets}>
                        <MDBIcon icon="heart"/>&ensp; Your Pets
                    </a>
                </p>
            </div>
        )
    }
}