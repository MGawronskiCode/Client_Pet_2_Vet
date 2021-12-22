import React, {useState} from "react";
import {MDBCard, MDBCardBody, MDBCardTitle} from "mdb-react-ui-kit";
import CardHeader from "./Elements/CardHeader";
import Note from "./PetNotes/Note";
import '../../assets/styles/Old/Notes.css'

export default function PetNotes(props) {

    const notes = props.notes;
    const [disabled, setDisabled] = useState(true);

    function getNotes() {
        return notes.map((note, index) => {
            return (
                <Note
                    note={note}
                    index={index}
                    getChangeModel={props.getChangeModal}
                    getObjectToChange={props.getObjectToChange}
                    getDeleteModal={props.getDeleteModal} />
            )
        })
    }

    return (
        <div onMouseOver={() => setDisabled(false)}
            onMouseOut={() => setDisabled(true)}>
            <MDBCard id="card">

                <MDBCardTitle>
                    <CardHeader
                        title="Personal notes"
                        disabled={disabled}
                        getAddModal={props.getAddModal}/>
                </MDBCardTitle>

                <MDBCardBody>
                    {getNotes()}
                </MDBCardBody>

            </MDBCard>
        </div>
    )

}
