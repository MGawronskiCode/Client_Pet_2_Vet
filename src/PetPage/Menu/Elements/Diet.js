import React, {Component} from "react";
import {MDBIcon} from "mdb-react-ui-kit";
import '../../../Styles/Menu.css'

export default class Diet extends Component {

    constructor(props) {
        super(props);

        this.getDietModule = this.getDietModule.bind(this);

        this.state = {
            diet : []
        }
    }

    async componentDidMount() {
        fetch("http://localhost:8080/pets/" + this.props.petId + "/meals")
            .then(response => response.json()
                .then(data => this.setState({diet: data}))
            );
    }

    getDietModule() {
        alert(this.state.diet);
    }

    render() {
        return (
            <div id="menuElement">
                <p>
                    <a onClick={this.getDietModule}>
                        <MDBIcon icon="drumstick-bite"/>&ensp; Diet module
                    </a>
                </p>
            </div>
        )
    }
}