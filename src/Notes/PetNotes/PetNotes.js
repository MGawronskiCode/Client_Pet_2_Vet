import React, {useEffect, useState} from "react";
import {MDBCard, MDBCardBody, MDBCardTitle} from "mdb-react-ui-kit";
import CardHeader from "../CardHeader";
import Note from "../Note";
import '../../Styles/Notes.css'

export default function PetNotes(props) {

    // TODO: petId from Parent. Here only for test
    const petId = 3;
    const [notes, setNotes] = useState([]);
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        fetch("http://localhost:8080/pets/" + petId + "/notes")
            .then(resp => resp.json())
            .then(data => setNotes(data))
    }, [])

    function getNotes() {
        return notes.map((note, index) => {
            return (
                <Note note={note} index={index} getDeleteModal={props.getDeleteModal}/>
            )
        })
    }

    return (
        <div onMouseOver={() => setDisabled(false)}
            onMouseOut={() => setDisabled(true)}>
            <MDBCard id="card">

                <MDBCardTitle>
                    <CardHeader title="Personal notes" disabled={disabled}/>
                </MDBCardTitle>

                <MDBCardBody>
                    {getNotes()}
                </MDBCardBody>

            </MDBCard>
        </div>
    )

}
