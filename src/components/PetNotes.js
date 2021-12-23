import React, {useState} from "react";
import {MDBCard, MDBCardBody, MDBCardTitle} from "mdb-react-ui-kit";
import CardHeader from "./CardHeader";
import CardElement from "./CardElement";
import '../assets/styles/Card.css'
import Clip from "../assets/images/Clip.jpg"

export default function PetNotes(props) {

    const notes = props.notes;
    const [disabled, setDisabled] = useState(true);

    function getNotes() {
        return notes.map((note, index) => {
            return (
                <div key={index}>
                    <CardElement
                        element={note}
                        index={index}
                        image={Clip}
                        getChangeModal={props.getChangeModal}
                        getObjectToChange={props.getObjectToChange}
                        getDeleteModal={props.getDeleteModal} />
                </div>
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
