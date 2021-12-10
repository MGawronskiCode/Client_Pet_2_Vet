import React, {Component} from "react";
import {MDBIcon} from "mdb-react-ui-kit";
import '../../../Styles/Menu.css'

export default class Pets extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pets : [],
        };

        this.getPets = this.getPets.bind(this);
    }

    // TODO: fix endpoint at backend side. For such endpoint we get all pets from DB, not User's pet => should be like "http://localhost:8080/<userId>/pets"
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