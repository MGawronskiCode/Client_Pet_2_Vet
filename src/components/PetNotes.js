import React, {useState} from "react";
import {MDBCard, MDBCardBody, MDBCardTitle} from "mdb-react-ui-kit";
import CardHeader from "./CardHeader";
import CardElement from "./CardElement";
import '../assets/styles/Card.css'
import Clip from "../assets/images/Clip.jpg"
import {Operation} from "../commons/Operations";

export default function PetNotes({notes, setShow, setCurrentElement, setCurrentOperation, setElementToChange}) {

    const [disabled, setDisabled] = useState(true);

    function getNotes() {
        return notes.map((note, index) => {
            return (
                <div key={index}>
                    <CardElement
                        element={note}
                        index={index}
                        image={Clip}
                        setShow={setShow}
                        setCurrentElement={setCurrentElement}
                        setCurrentOperation={setCurrentOperation}
                        setElementToChange={setElementToChange}
                    />
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
                        setShow={setShow}
                        setCurrentElement={setCurrentElement}
                        setCurrentOperation={() => setCurrentOperation(Operation.ADD)}
                    />
                </MDBCardTitle>

                <MDBCardBody>
                    {notes.length !== 0 ? getNotes() : "Empty"}
                </MDBCardBody>

            </MDBCard>
        </div>
    )

}
