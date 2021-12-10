import React, {useState} from "react";
import {MDBCard, MDBCardBody, MDBCardTitle} from "mdb-react-ui-kit";
import CardHeader from "../Elements/CardHeader";
import PetNote from "../PetNote";
import '../../../Styles/Notes.css'

export default function PetNotes(props) {

    const notes = props.notes;
    const [disabled, setDisabled] = useState(true);

    function getNotes() {
        return notes.map((note, index) => {
            return (
                <PetNote
                    note={note}
                    index={index}
                    getChangeModel={props.getChangeModal}
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
