import React, {Component} from "react";
import '../../Styles/Notes.css'
import {MDBCard, MDBCardBody, MDBCardTitle, MDBIcon} from "mdb-react-ui-kit";
import CardHeader from "../CardHeader";
import Note from "../Note";

// eslint-disable-next-line react/prefer-stateless-function
export default class PetNotes extends Component {

    // TODO: petId from Parent. Here only for test
    petId = 3;

    constructor(props) {
        super(props);

        this.state = {
            notes: [],
        }

        this.getNotes = this.getNotes.bind(this);
    }

    async componentDidMount() {
        fetch("http://localhost:8080/pets/" + this.petId + "/notes")
            .then(response => response.json()
                .then(data => this.setState({notes: data}))
            );
    }

    getNotes() {
        return this.state.notes.map((note, index) => {
            return (
                <Note note={note} index={index}/>
            )
        })
    }


    render() {
        return (
            <div>
                <MDBCard>

                    <MDBCardTitle>
                        <CardHeader title="Personal notes"/>
                    </MDBCardTitle>

                    <MDBCardBody>
                        {this.getNotes()}
                    </MDBCardBody>

                </MDBCard>
            </div>
        )
    }
}
